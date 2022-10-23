const { gql } = require('apollo-server-express')

const scheduleTypeDefs = gql`
    # TYPES
    type Course {
        name : String!
        professor : String!
        courseId : Int!
        credits : Int!
        building : String!
        classroom : String!
        group : Int!
        type: String
        timetable : String!
    }

    input inputCourse {
        courseId : Int!
        name : String!
        professor : String!
        credits : Int!
        building : String!
        classroom : String!
        group : Int!
        type: String
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

    type sc_responseData {
        message : String
    }

    type sc_response {
        status : Int
        statusText : String
        data : sc_responseData
    }

    
    # Queries
    type Query {
        sc_getSchedule(userId : String!) : sc_Schedule!
    }

    # Mutations
    type Mutation {
        sc_putSchedule( schedule : sc_inputSchedule! ) : sc_response
    }
`
module.exports = { scheduleTypeDefs }
