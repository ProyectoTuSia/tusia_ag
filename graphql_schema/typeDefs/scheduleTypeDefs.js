const { gql } = require('apollo-server-express')

const scheduleTypeDefs = gql`
    # TYPES
    type Course {
        name : String!
        professor : String!
        code : Int!
        credits : Int!
        building : String!
        classroom : String!
        group : Int!
        typo: String
        timetable : String!
    }

    input inputCourse {
        name : String!
        professor : String!
        code : Int!
        credits : Int!
        building : String!
        classroom : String!
        group : Int!
        typo: String
        timetable : String!
    }

    type sc_Schedule {
        userId : String
        monday : [Course]
        tuesday : [Course]
        wednesday : [Course]
        thursday : [Course]
        friday : [Course]
        saturday : [Course]
    }

    input sc_inputSchedule {
        userId : String!
        monday : [inputCourse]
        tuesday : [inputCourse]
        wednesday : [inputCourse]
        thursday : [inputCourse]
        friday : [inputCourse]
        saturday : [inputCourse]
    }

    type response {
        status : Int
        statusText : String
    }

    
    # Queries
    type Query {
        sc_getSchedule(userId : String!) : sc_Schedule!
    }

    # Mutations
    type Mutation {
        sc_putSchedule( schedule : sc_inputSchedule! ) : response
    }
`
module.exports = { scheduleTypeDefs }
