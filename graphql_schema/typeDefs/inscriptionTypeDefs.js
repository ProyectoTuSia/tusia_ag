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
    
    type SubjectGroup {
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

    type CareerHasSubject {
        career: Career!
        subject: Subject!
        typology: String!
    }

    type StudentHasSubjectGroup {
        student: Student!
        subjectGroup: SubjectGroup!
    }

    # Queries
    type Query {
        getAllStudents : [Student]
        getStudentByUsername(username:String!) : Student

        getAllCareers : [Career]

        getAllGroupsOfSubject(subjectCode: Int!) : [SubjectGroup]
        getGroupOfSubject(subjectCode: Int!, number:Int!) : SubjectGroup

        getCareersOfStudent(username:String!) : [StudentHasCareer]

        getStudentCoursedSubjects(username:String!) : [StudentCoursedSubject]

        getCareerSubjectsByTypology(careerCode: Int!, typology: String!) : [CareerHasSubject]

        getAllGroupsOfStudent(username: String!) : [StudentHasSubjectGroup]
    }
    # Mutations
    type Mutation {
        createOrUpdateStudent(student: StudentInput!): Student!

        createOrUpdateCareer(career: CareerInput!): Career!

        addCoursedSubjectToStudent(subjectCode: Int!, studentUsername: String!): String!

        addStudentToGroup(studentUsername: String!, subjectCode: Int!, groupNumber: Int!): String!
    }
`
module.exports = { inscriptionTypeDefs }
