const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Event {
        _id: ID
        name: String
        address: String
        description: String
        startDate: String
        endDate: String
    }

    type User {
        _id: ID
        username: String
        email: String
        isModerator: Boolean
        events: [Event]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        events: [Event]
        event(_id: ID!): Event
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!, isModerator: Boolean): Auth
        createEvent(name: String!, address: String!, description: String!, startDate: String!, endDate: String!): Event
        addEvent(eventId: ID!): User
    }
`;

module.exports = typeDefs;
