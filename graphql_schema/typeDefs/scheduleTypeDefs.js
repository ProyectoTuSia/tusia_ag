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
        userId : String!
        monday : [Course]!
        tuesday : [Course]!
        wednesday : [Course]!
        thursday : [Course]!
        friday : [Course]!
        saturday : [Course]!
    }

    input sc_inputSchedule {
        userId : String!
        monday : [Course]!
        tuesday : [Course]!
        wednesday : [Course]!
        thursday : [Course]!
        friday : [Course]!
        saturday : [Course]!
    }

    
    # Queries
    sc_getSchedule(userId : String!) : Schedule!

    # Mutations
    mutation {
        sc_putSchedule( schedule : sc_inputSchedule! )
    }
`
module.exports = { scheduleTypeDefs }
