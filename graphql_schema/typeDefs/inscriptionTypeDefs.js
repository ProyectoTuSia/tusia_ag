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

    type Subject {
        code: Int!
        name: String!
        credits: Int!
        faculty: String!
    }
    input SubjectInput{
        code: Int!
    }
    
    type Group {
        number: Int!
        slots: Int!
        subject: Subject!
    }

    type StudentHasCareer {
        student: Student!
        career: Career!
    }

    type StudentCoursedSubject {
        student: Student!
        subject: Subject!
    }

    # Queries
    type Query {
        getAllStudents : [Student]
        getStudentByUsername(username:String!) : Student

        getAllCareers : [Career]

        getAllGroupsOfSubject(subject:SubjectInput!) : [Group]
        getGroupOfSubject(subject:SubjectInput!, number:Int!) : Group

        getCareersOfStudent(username:String!) : [StudentHasCareer]

        getStudentCoursedSubjects(username:String!) : [StudentCoursedSubject]
    }
    # Mutations
    type Mutation {
        createOrUpdateStudent(student: StudentInput!): Student!

        createOrUpdateCareer(career: CareerInput!): Career!

        addCoursedSubjectToStudent(subjectCode: Int!, studentUsername: String!): String!
    }
`
module.exports = { inscriptionTypeDefs }
