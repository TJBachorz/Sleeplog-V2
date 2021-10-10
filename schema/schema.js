const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        id: Int!
        email: String!
    }

    type Sleeplog {
        id: Int!
        name: String!
        brand: String
        price: Float
    }

    type Query {
        current: User
        sleeplog(id: Int!): Sleeplog
        sleeplogs(brand: String!): [Sleeplog]
    }

    type Mutation {
        register(email: String!, password: String!): String
        login(email: String!, password: String!): String
    }
`;

module.exports = typeDefs;