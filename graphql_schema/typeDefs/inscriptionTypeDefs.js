const { gql } = require('apollo-server-express')

const inscriptionTypeDefs = gql`
    # TYPES
    type Student {
        username : String!
        available_credits : Int!
    }
    input StudentInput {
        username : String!
        available_credits : Int!
    }

    type Career {
        code: Int!
        name: String!
    }
    input CareerInput {
        code: Int!
        name: String!
    }
    # Queries
    type Query {
        getAllStudents : [Student]
        getStudentByUsername(username:String!) : Student

        getAllCareers : [Career]
    }
    # Mutations
    type Mutation {
        createOrUpdateStudent(student: StudentInput!): Student!

        createOrUpdateCareer(career: CareerInput!): Career!
    }
`
module.exports = { inscriptionTypeDefs }
