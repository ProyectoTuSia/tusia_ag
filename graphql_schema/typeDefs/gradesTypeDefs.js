const { gql } = require('apollo-server-express')

const gradesTypeDefs = gql`
    # TYPES
    type gm_Grade {
        course_code: Int!
        group_code: Int!
        username : String!
        value: Float!
        description: String!
        weight: Int!
    }

    type gm_Weight {
        course_code: Int!
        course_group: Int!
        weight: Int!
        description: String!
    }

    type gm_finalGrade {
        student_username: String!
        course_code: Int!
        course_group: Int!
        grade: Float!
    }
    
    input gm_WeightInput {
        weight: Int!
        description: String!
    }
    
    input gm_WeightsInput {
        weights: [gm_WeightInput!]!        
    }    
    
    input gm_GradeInput{
        student_username: String! 
        professor_username: String!
        weight: Int!
        description: String! 
        value: Float!
    }

    input gm_GradesInput{
        grades : [gm_GradeInput!]!
    }   

    type gm_UpdateGradesWeights{
        status : String!
        courseCode : Int
        groupNumber : Int
        weights : [gm_Weight]
    }

    type gm_UpdateStudentsGrades{
        status : String!
        courseCode : Int
        groupNumber : Int
        grades : [gm_Grade]
    }    
    
    # Queries
    type Query{
        gm_getGroupGrades(courseCode: Int! , groupCode: Int!): [gm_Grade]

        gm_getGroupWeights(courseCode: Int! , groupCode: Int!): [gm_Weight]

        gm_getStudentGradesInGroup(courseCode: Int! , groupCode: Int!, username: String!): [gm_Grade]

    }

    # Mutations
    type Mutation{
        gm_updateGradeWeights(courseCode: Int! , courseGroup: Int!, weights: gm_WeightsInput!) :gm_UpdateGradesWeights

        gm_updateStudentsGrades(courseCode: Int! , courseGroup: Int!, grades: gm_GradesInput!) : gm_UpdateStudentsGrades

        # gm_consolidateGroupGrades(courseCode: Int! , courseGroup: Int!) : [gm_finalGrade!]!
        gm_consolidateGroupGrades(courseCode: Int! , courseGroup: Int!) : String!
    }
`
module.exports = { gradesTypeDefs }
