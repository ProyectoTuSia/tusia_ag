const { gql } = require('apollo-server-express')

const authenticationTypeDefs = gql`
    type Query {
        authGetAllUsers(token: String!): [User!]!
        authGetUserByID(id: ID!, token: String!): User
    }
    
    type Mutation {
        authLogin(email: String!, password: String!): String!
        authCreateUser(input: createUserInput!, token: String!): User!
        authDeleteUser(id: ID!, token: String!): String!
        authUpdateUser(id: ID!, input: updateUserInput!, token: String!): String!
    }

    type User {
        id: ID!
        password: String!
        basicData: basicData!
        birthData: birthData!
        healthData: healthData!
        responsible: responsible!
        originData: originData!
        residenceData: residenceData!
        militarySituation: militarySituation!
    }

    type basicData {
        mail: String!
        role: String!
        fullName: String!
        idCard: String!
        idIssuingDept: String!
        idIssuingPlace: String!
        gender: String!
        ethnicity: String!
        personalMail: String!
        mobileNumber: String!
        landlineTelephone: String!
    }

    type birthData {
        birthDate: String!
        countryBirth: String!
        departmentBirth: String!
        municipalityBirth: String!
        nationality: String!
    }

    type healthData {
        bloodType: String!
        rhFactor: String!
        eps: String!
    }

    type responsibleFatherData {
        nameResponsibleParent: String!
        firstSurname: String!
        secondSurname: String!
        documentType: String!
        idNumber:  String!
    }

    type responsibleMotherData {
        nameResponsibleParent: String!
        firstSurname: String!
        secondSurname: String!
        documentType: String!
        idNumber:  String!
    }

    type responsible {
        responsibleFatherData: responsibleFatherData!
        responsibleMotherData: responsibleMotherData!
    }

    type originData {
        address: String!
        municipality: String!
        department: String!
        postalCode: String!
        stratum: String!
    }

    type residenceData {
        address: String!
        municipality: String!
        department: String!
        postalCode: String!
        telephone: String!
    }

    type militarySituation {
        militaryPassbook: Boolean!
    }

    input createUserInput {
        
        password: String!

        #Basic Data
        mail: String!
        role: String!
        fullName: String!
        idCard: String!
        idIssuingDept: String!
        idIssuingPlace: String!
        gender: String!
        ethnicity: String!
        personalMail: String!
        mobileNumber: String!
        landlineTelephone: String!

        #Birth data
        birthDate: String!
        countryBirth: String!
        departmentBirth: String!
        municipalityBirth: String!
        nationality: String!

        #Health Data
        bloodType: String!
        rhFactor: String!
        eps: String!

        #Responsible Father Data
        nameResponsibleParentFather: String!
        firstSurnameFather: String!
        secondSurnameFather: String!
        documentTypeFather: String!
        idNumberFather:  String!

        #Responsible Mother Data
        nameResponsibleParentMother: String!
        firstSurnameMother: String!
        secondSurnameMother: String!
        documentTypeMother: String!
        idNumberMother:  String!

        #Origin Data
        addressOrigin: String!
        municipalityOrigin: String!
        departmentOrigin: String!
        postalCodeOrigin: String!
        stratum: String!

        #Residence Data
        addressResidence: String!
        municipalityResidence: String!
        departmentResidence: String!
        postalCodeResidence: String!
        telephone: String!

        #Military Situation Data 
        militaryPassbook: Boolean!
    }

    input updateUserInput {
        password: String

        #Basic Data
        mail: String
        role: String
        fullName: String
        idCard: String
        idIssuingDept: String
        idIssuingPlace: String
        gender: String
        ethnicity: String
        personalMail: String
        mobileNumber: String
        landlineTelephone: String

        #Birth data
        birthDate: String
        countryBirth: String
        departmentBirth: String
        municipalityBirth: String
        nationality: String

        #Health Data
        bloodType: String
        rhFactor: String
        eps: String

        #Responsible Father Data
        nameResponsibleParentFather: String
        firstSurnameFather: String
        secondSurnameFather: String
        documentTypeFather: String
        idNumberFather:  String

        #Responsible Mother Data
        nameResponsibleParentMother: String
        firstSurnameMother: String
        secondSurnameMother: String
        documentTypeMother: String
        idNumberMother:  String

        #Origin Data
        addressOrigin: String
        municipalityOrigin: String
        departmentOrigin: String
        postalCodeOrigin: String
        stratum: String

        #Residence Data
        addressResidence: String
        municipalityResidence: String
        departmentResidence: String
        postalCodeResidence: String
        telephone: String

        #Military Situation Data 
        militaryPassbook: Boolean
    }
`

module.exports = { authenticationTypeDefs }
