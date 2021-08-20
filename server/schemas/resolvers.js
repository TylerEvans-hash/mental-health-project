const { AuthenticationError } = require('apollo-server-express');
const { User, Event } = require('../models');
const { signToken } = require('../utils/auth');

require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const singleSender = 'plancommunityproject@gmail.com';

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
            return User.find()
                .select('-__v -password');
    },
    user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password');
    },
    events: async () => {
        return Event.find()
            .select('-__v');
    },
    event: async(parent, { _id }) => {
        return Event.findOne({ _id })
            .select('-__v');
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      const { email, username } = args;

      const msg= {
        'to': `${email}`,
        'from': `${singleSender}`,
        'subject': 'Welcome to Plan Community!!!',
        'text': `Hello ${username}! Welcome to Plan Community!!! Our mission here is to bring together those who suffer from Mental Illnesses and those who want to help Support. We thank you for joining the fight against Mental Illnesses. If you would to purchse any tickets please see our events page. If you would like to donate please see the donation page.
        And again we thank you very much for joining us!!!
        
        Plan Community
        plancommunityproject@gmail.com`,
        'html': `<strong>Hello ${username}!!!</strong>
        <br>
        <br>
        <strong>Welcome to Plan Community!!! Our mission here is to bring together those who suffer from Mental Illnesses and those who want to</strong>
        <strong>help Support. We thank you for joining the fight against Mental Illnesses. If you would to purchse any tickets please see our events page. If you would like to donate please see the donation page.</strong>
        <strong>And again we thank you very much for joining us!!!</strong>
        <br>
        <br>
        <strong>Plan Community</strong>
        <br>
        <strong>plancommunityproject@gmail.com</strong>`
      }

      sgMail
        .send(msg)
        .then(() => {
          console.log('Email Sent');
        })
        .catch((err) => {
          console.error(err);
          console.error(err.body);
        });
      
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    createEvent: async (parent, args) => {
        const event = await Event.create(args);

        return event;
    },
    addEvent: async (parent, args, context) => {
        if ( context.user ) {
            const updatedUser = await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { events: event._id } },
                { new: true }
            );

            return updatedUser;
        }

        throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;
