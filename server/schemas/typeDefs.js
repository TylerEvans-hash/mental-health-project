const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        name: String
    }

    type Event {
        _id: ID
        name: String
        address: String
        description: String
        startDate: String
        endDate: String
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
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!, name: String): Auth
        addEvent(name: String!, address: String!, description: String!, startDate: String!, endDate: String!):
    }
`;

module.exports = typeDefs;