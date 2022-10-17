const {
  loginAuthentication,
  authGetAllUsers,
  authGetUserById,
  authCreateUser,
  authUpdateUser,
  authDeleteUser
} = require('../../../MS_access/authenticationAccess')

function copyData (userInDb, userUpdated) {
  for (const key in userInDb) {
    if (userInDb.hasOwnProperty(key)) {
      if (userUpdated[key] === undefined) {
        userUpdated[key] = userInDb[key]
      } else if (typeof userInDb[key] === 'object') {
        copyData(userInDb[key], userUpdated[key])
      }
    }
  }
}

const authenticationResolvers = {
  Query: {
    async authGetAllUsers (parent, args, context) {
      const { token } = args

      const users = await authGetAllUsers(token)
      return users
    },

    async authGetUserByID (parent, args, context) {
      const { id, token } = args
      const user = await authGetUserById(id, token)
      return user
    },

    async authLogin (parent, args, context) {
      const { email, password } = args
      const userCredentials = {
        password,
        basicData: {
          mail: email
        }
      }

      const token = await loginAuthentication(userCredentials)

      return token
    }
  },

  Mutation: {
    async authCreateUser (parent, { input, token }, context) {
      const {
        password,
        mail,
        role,
        fullName,
        idCard,
        idIssuingDept,
        idIssuingPlace,
        gender,
        ethnicity,
        personalMail,
        mobileNumber,
        landlineTelephone,

        birthDate,
        countryBirth,
        departmentBirth,
        municipalityBirth,
        nationality,

        bloodType,
        rhFactor,
        eps,

        nameResponsibleParentFather,
        firstSurnameFather,
        secondSurnameFather,
        documentTypeFather,
        idNumberFather,

        nameResponsibleParentMother,
        firstSurnameMother,
        secondSurnameMother,
        documentTypeMother,
        idNumberMother,

        addressOrigin,
        municipalityOrigin,
        departmentOrigin,
        postalCodeOrigin,
        stratum,

        addressResidence,
        municipalityResidence,
        departmentResidence,
        postalCodeResidence,
        telephone,

        militaryPassbook
      } = input

      const newUser = {
        password,

        basicData: {
          mail,
          role,
          fullName,
          idCard,
          idIssuingDept,
          idIssuingPlace,
          gender,
          ethnicity,
          personalMail,
          mobileNumber,
          landlineTelephone
        },

        birthData: {
          birthDate,
          countryBirth,
          departmentBirth,
          municipalityBirth,
          nationality
        },

        healthData: {
          bloodType,
          rhFactor,
          eps
        },

        responsible: {
          responsibleFatherData: {
            nameResponsibleParent: nameResponsibleParentFather,
            firstSurname: firstSurnameFather,
            secondSurname: secondSurnameFather,
            documentType: documentTypeFather,
            idNumber: idNumberFather
          },
          responsibleMotherData: {
            nameResponsibleParent: nameResponsibleParentMother,
            firstSurname: firstSurnameMother,
            secondSurname: secondSurnameMother,
            documentType: documentTypeMother,
            idNumber: idNumberMother
          }
        },

        originData: {
          address: addressOrigin,
          municipality: municipalityOrigin,
          department: departmentOrigin,
          postalCode: postalCodeOrigin,
          stratum
        },

        residenceData: {
          address: addressResidence,
          municipality: municipalityResidence,
          department: departmentResidence,
          postalCode: postalCodeResidence,
          telephone
        },

        militarySituation: {
          militaryPassbook
        }
      }

      const response = await authCreateUser(newUser, token)
      return response
    },

    async authDeleteUser (parent, { id, token }, context) {
      const status = await authDeleteUser(id, token)
      return status
    },

    async authUpdateUser (parent, { id, input, token }, context) {
      const userInDb = await authGetUserById(id, token)

      const {
        password,
        mail,
        role,
        fullName,
        idCard,
        idIssuingDept,
        idIssuingPlace,
        gender,
        ethnicity,
        personalMail,
        mobileNumber,
        landlineTelephone,

        birthDate,
        countryBirth,
        departmentBirth,
        municipalityBirth,
        nationality,

        bloodType,
        rhFactor,
        eps,

        nameResponsibleParentFather,
        firstSurnameFather,
        secondSurnameFather,
        documentTypeFather,
        idNumberFather,

        nameResponsibleParentMother,
        firstSurnameMother,
        secondSurnameMother,
        documentTypeMother,
        idNumberMother,

        addressOrigin,
        municipalityOrigin,
        departmentOrigin,
        postalCodeOrigin,
        stratum,

        addressResidence,
        municipalityResidence,
        departmentResidence,
        postalCodeResidence,
        telephone,

        militaryPassbook
      } = input

      const userUpdated = {
        password,

        basicData: {
          mail,
          role,
          fullName,
          idCard,
          idIssuingDept,
          idIssuingPlace,
          gender,
          ethnicity,
          personalMail,
          mobileNumber,
          landlineTelephone
        },

        birthData: {
          birthDate,
          countryBirth,
          departmentBirth,
          municipalityBirth,
          nationality
        },

        healthData: {
          bloodType,
          rhFactor,
          eps
        },

        responsible: {
          responsibleFatherData: {
            nameResponsibleParent: nameResponsibleParentFather,
            firstSurname: firstSurnameFather,
            secondSurname: secondSurnameFather,
            documentType: documentTypeFather,
            idNumber: idNumberFather
          },
          responsibleMotherData: {
            nameResponsibleParent: nameResponsibleParentMother,
            firstSurname: firstSurnameMother,
            secondSurname: secondSurnameMother,
            documentType: documentTypeMother,
            idNumber: idNumberMother
          }
        },

        originData: {
          address: addressOrigin,
          municipality: municipalityOrigin,
          department: departmentOrigin,
          postalCode: postalCodeOrigin,
          stratum
        },

        residenceData: {
          address: addressResidence,
          municipality: municipalityResidence,
          department: departmentResidence,
          postalCode: postalCodeResidence,
          telephone
        },

        militarySituation: {
          militaryPassbook
        }
      }

      copyData(userInDb, userUpdated)
      const response = await authUpdateUser(id, userUpdated, token)
      return response
    }
  }
}

module.exports = { authenticationResolvers }
