const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        id: Int!
        email: String!
    }

    type Sleeplog {
        id: Int!
        bedtime: String!
        approximateSleepTime: String!
        hoursSlept: Int!
        wakeUpTime: String!
        ateSpicy: Boolean!
        drankAlcohol: Boolean!
        sleepMeds: Boolean!
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