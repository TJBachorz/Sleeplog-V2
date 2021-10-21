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
        hoursSlept: Int!
        numberOfTimesAwoken: Int!
        wakeUpTime: String!
        ateSpicy: Boolean!
        drankAlcohol: Boolean!
        sleepMeds: Boolean!
        userId: Int!
    }
    
    type Query {
        current: User
        findSleeplog(id: Int!): Sleeplog
    }

    type Mutation {
        register(email: String!, password: String!): String
        login(email: String!, password: String!): String
        newSleeplog( 
            nightOfDate: String!
            bedtime: String!
            approximateSleepTime: String!
            numberOfTimesAwoken: Int!
            wakeUpTime: String!
            ateSpicy: Boolean!
            drankAlcohol: Boolean!
            sleepMeds: Boolean!
            userId: Int!
        ): Sleeplog
    }
    `;
    
    module.exports = typeDefs;
    // newSleeplog(
    //     nightOfDate: String!
    //     bedtime: String!
    //     approximateSleepTime: String!
    //     numberOfTimesAwoken: Int!
    //     wakeUpTime: String!
    //     ateSpicy: Boolean!
    //     drankAlcohol: Boolean!
    //     sleepMeds: Boolean!
    //     userId: Int!
    // ): Sleeplog


    // type Sleeplog {
    //     id: Int!
    //     nightOfDate: String!
    //     bedtime: String!
    //     approximateSleepTime: String!
    //     hoursSlept: Int!
    //     numberOfTimesAwoken: Int!
    //     wakeUpTime: String!
    //     ateSpicy: Boolean!
    //     drankAlcohol: Boolean!
    //     sleepMeds: Boolean!
    //     userId: Int!
    // }