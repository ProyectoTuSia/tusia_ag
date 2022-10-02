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

    type Schedule {
        monday : [Course]!
        tuesday : [Course]!
        wednesday : [Course]!
        thursday : [Course]!
        friday : [Course]!
        saturday : [Course]!
    }

    input inputSchedule {
        monday : [Course]!
        tuesday : [Course]!
        wednesday : [Course]!
        thursday : [Course]!
        friday : [Course]!
        saturday : [Course]!
    }

    
    # Queries
    getSchedule(userId : String!) : Schedule!

    # Mutations
    mutation {
        putSchedule( userId: String!, schedule : Schedule! )
    }
`
module.exports = { scheduleTypeDefs }
