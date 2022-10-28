const { gql } = require('apollo-server-express')

const courseSearchTypeDefs = gql`
    # TYPES
    type Campus {
        Id_campus : Int!
        Name_campus: String!
    }
    
    type Faculty {
        Id_faculty : Int!
        Name_faculty: String!
        Id_campus: [String!]    
    }

    type Career {
        Id_career : Int!
        Name_career: String!
        Id_faculty: String!  
    }

    type typetypology {
        Id_typology : Int!
        Name_typology: String!
    }

    type Subject {
        Id_subject : Int!
        Name_subject : String!
        Credits : Int!  
        Typology : Int!
        Description : String!
        Id_career : [String!]
        Id_condition : [Int!]
    }

    type Group {
        Id_group : Int
        Modality : String!
        Teacher : String!
        Date_start : String!
        Date_finish : String!
        Duration : String!
        Working_day : String!
        Slots : Int!
        Id_faculty : [String!]
        Id_subject : Int!
        Id_schedule : [Int!]
    }

    input GroupInput {
        Id_group : Int!
        Modality : String!
        Teacher : String!
        Date_start : String!
        Date_finish : String!
        Duration : String!
        Working_day : String!
        Slots : Int!
        Id_faculty : [String!]
        Id_subject : Int!
        Id_schedule : [Int!]
    }

    type Schedule {
        Id_Schedule : Int!
        day_name : String!
        Star_time : String!
        End_time : String!
        Id_place : Int!
    }

    type Place {
        Id_place : Int!
        Place_numbertower : Int!
        Place_nametower : String!
        Place_numbersalon : Int!
        Place_namesalon : String!
    }

    type Condition {
        Id_condition : Int!
        number_condition : Int!
        Subject_condition : [String!]
        All_subjects : Boolean!
        Number_subject : Int!
        Type_condition : String!
    }

    type Subjectsconditions {
        Id_Subjectconditions : Int!
        Name_subjectconditions : String!
    }

    type Typesconditions {
        Id_types : String!
        Description : String!
    }

    type TypeConditions {
        Id_types : String!
        Description : String!
    }

    # query
    type Query {
        getCampus: [Campus]
        getCampusById(Id_campus:Int!) : Campus
        getFaculty: [Faculty]
        getFacultyById(Id_faculty:Int!) : Faculty
        getCareer: [Career]
        getCareerById(Id_career:Int!) : Career
        getTypeTypology: [typetypology]
        getTypeTypologyById(Id_typology:Int!) : typetypology
        getSubject: [Subject]
        getSubjectById(Id_subject:Int!) : Subject
        getGroup: [Group]
        getGroupById(Id_group:Int!) : Group
        getSchedule: [Schedule]
        getScheduleById(Id_Schedule:Int!) : Schedule
        getPlace: [Place]
        getPlaceById(Id_place:Int!) : Place 
        getCondition: [Condition]
        getConditionById(Id_condition:Int!) : Condition
        getSubjectsconditions: [Subjectsconditions]
        getSubjectsconditionsById(Id_Subjectconditions:Int!) : Subjectsconditions
        getTypeConditions: [Typesconditions]
        getTypeConditionsById(Id_types:String!) : Typesconditions
        getGroupBySubject(Id_subject:Int!): [Group]
    }
    # Mutations
    type Mutation {
        createOrUpdateGroup(group: GroupInput!) : Group!
    }
`
module.exports = { courseSearchTypeDefs }
