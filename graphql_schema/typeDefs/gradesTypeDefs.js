const { gql } = require('apollo-server-express')

const gradesTypeDefs = gql`
    # TYPES
    type Grade {
        course_code: Int!
        group_code: Int!
        username : String!
        grade: Float!
        description: String!
        weight: Int!
    }

    type Weight {
        weight: Int!
        description: String!
    }

    input WeightInput {
        weight: Int!
        description: String!
    }
    
    input WeightsInput {
        weights: [WeightInput!]!        
    }
    
    # Queries
    type Query{
        getGroupGrades(courseCode: Int! , groupCode: Int!): [Grade]
        getStudentGradesInGroup(courseCode: Int! , groupCode: Int!, username: String!): [Grade]
    }

    # Mutations
    type Mutation{
        updateGradeWeights(courseCode: Int! , groupCode: Int!, weights: WeightsInput!) : String
    }
`
module.exports = { gradesTypeDefs }
