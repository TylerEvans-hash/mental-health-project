const { AuthenticationError } = require('apollo-server-express');
const { User, Event } = require('../models');
const { signToken } = require('../utils/auth');

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
