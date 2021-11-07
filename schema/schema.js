const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        id: Int!
        email: String!
    }

    type Sleeplog {
        id: Int!
        nightOfDate: String!
        bedtime: String!
        approximateSleepTime: String!
        sleepInterrupted: Int!
        sleepLostFromInterruptions: Float!
        wakeUpDate: String!
        wakeUpTime: String!
        ateSpicy: Boolean!
        drankAlcohol: Boolean!
        sleepMeds: Boolean!
        userId: Int!
        notes: String
        points: Float
    }

    type LoginReturn {
        userId: Int
        token: String
    }

    type Query {
        current: User
        findSleeplog(id: Int!): Sleeplog
        getSleeplogs(id: Int!): [Sleeplog]
    }

    type Mutation {
        register(email: String!, password: String!): String
        login(email: String!, password: String!): LoginReturn
        newSleeplog(
            nightOfDate: String!
            bedtime: String!
            approximateSleepTime: String!
            sleepInterrupted: Int!
            sleepLostFromInterruptions: Float!
            wakeUpDate: String!
            wakeUpTime: String!
            ateSpicy: Boolean!
            drankAlcohol: Boolean!
            sleepMeds: Boolean!
            userId: Int!
            notes: String
        ): Sleeplog
    }
    `;
    
    module.exports = typeDefs;