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
    # Queries
    type Query {
        getAllStudents : [Student!]!
        getStudentByUsername(username:String!) : Student
    }
    # Mutations
    type Mutation {
        createOrUpdateStudent(student: StudentInput!): Student!
    }
`
module.exports = { inscriptionTypeDefs }
