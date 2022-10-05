const { gql } = require('apollo-server-express')

const inscriptionTypeDefs = gql`
    # TYPES
    type ins_Student {
        username : String!
        available_credits : Int!
    }
    input ins_StudentInput {
        username : String!
        available_credits : Int!
    }

    type ins_Career {
        code: Int!
        name: String!
    }
    input ins_CareerInput {
        code: Int!
        name: String!
    }

    type ins_Subject {
        code: Int!
        name: String!
        credits: Int!
        faculty: String!
    }
    
    type ins_SubjectGroup {
        number: Int!
        slots: Int!
        subject: ins_Subject!
    }

    type ins_StudentHasCareer {
        student: ins_Student!
        career: ins_Career!
    }

    type ins_StudentCoursedSubject {
        student: ins_Student!
        subject: ins_Subject!
    }

    type ins_CareerHasSubject {
        career: ins_Career!
        subject: ins_Subject!
        typology: String!
    }

    type ins_StudentHasSubjectGroup {
        student: ins_Student!
        subjectGroup: ins_SubjectGroup!
    }

    input ins_StudentHasSubjectGroupInput {
        subject_group_number: Int!
        subject_group_subject_code: Int!
        student_username: String!
        token: String!
    }

    input ins_StudentHasSubjectGroupCancellationInput {
        subject_group_number: Int!
        subject_group_subject_code: Int!
        student_username: String!
        token: String!
        creditLoss: Boolean!
    }

    type ins_Schedule {
        id : Int!
        start_time : String!
        end_time : String!
        day : String!
    }

    type ins_SubjectGroupHasSchedule {
        subjectGroup : ins_SubjectGroup!
        schedule : ins_Schedule!
    }

    # queries
    type Query {
        ins_getAllStudents : [ins_Student]
        ins_getStudentByUsername(username:String!) : ins_Student

        ins_getAllCareers : [ins_Career]

        ins_getAllGroupsOfSubject(subjectCode: Int!) : [ins_SubjectGroup]
        ins_getGroupOfSubject(subjectCode: Int!, groupNumber:Int!) : ins_SubjectGroup

        ins_getCareersOfStudent(username:String!) : [ins_StudentHasCareer]

        ins_getStudentCoursedSubjects(username:String!) : [ins_StudentCoursedSubject]

        ins_getCareerSubjectsByTypology(careerCode: Int!, typology: String!) : [ins_CareerHasSubject]
        ins_getStudentNotCoursedSubjectsInCareer(careerCode: Int!, username: String!) : [ins_CareerHasSubject]

        ins_getAllGroupsOfStudent(username: String!) : [ins_StudentHasSubjectGroup]

        ins_getSchedulesOfGroup(subjectCode : Int!, groupNumber: Int!) : [ins_SubjectGroupHasSchedule]
    }
    # mutations
    type Mutation {
        ins_createOrUpdateStudent(student: ins_StudentInput!): ins_Student!

        ins_createOrUpdateCareer(career: ins_CareerInput!): ins_Career!

        ins_addCoursedSubjectToStudent(subjectCode: Int!, studentUsername: String!, token: String!): String!

        ins_addStudentToGroups(list: [ins_StudentHasSubjectGroupInput]): Boolean!
        ins_removeStudentFromGroups(list: [ins_StudentHasSubjectGroupCancellationInput]): Boolean!
    }
`
module.exports = { inscriptionTypeDefs }
