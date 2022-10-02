const { loginAuthentication, authGetAllUsers, authGetUserById, authCreateUser, authUpdateUser, authDeleteUser } = require("../../MS_access/authenticationAccess");

const authenticationResolvers = {
  Query: {
    async authGetAllUsers(parent, args, context)
    {
      const users = await authGetAllUsers(token);
      return users;
    },

    async authGetUserByID(parent, args, context)
    {
      const { id } = args;
      const user = await authGetUserById(id, token);
      return user;
    }
  },

  Mutation: {
    async authCreateUser(parent, { input }, context)
    {
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
        rHFactor,
        ePS,

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

        militaryPassbook,
      } = input;

      const newUser = {
        password,

        basicData:{
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
        },

        birthData:{
          birthDate,
          countryBirth,
          departmentBirth,
          municipalityBirth,
          nationality,
        },

        healthData:{
          bloodType,
          rHFactor,
          ePS,
        },

        responsible:{
          responsibleFatherData:{
            nameResponsibleParentFather,
            firstSurnameFather,
            secondSurnameFather,
            documentTypeFather,
            idNumberFather,
          },
          responsibleMotherData:{
            nameResponsibleParentMother,
            firstSurnameMother,
            secondSurnameMother,
            documentTypeMother,
            idNumberMother,
          }
        },

        originData:{
          addressOrigin,
          municipalityOrigin,
          departmentOrigin,
          postalCodeOrigin,
          stratum,
        },

        residenceData:{
          addressResidence,
          municipalityResidence,
          departmentResidence,
          postalCodeResidence,
          telephone,
        },

        militarySituation:{
          militaryPassbook,
        }
        };

      const response = await authCreateUser(newUser, token);
      return response;
    },

    async authDeleteUser(parent, { id }, context) {
      const status = await authDeleteUser(id, token);
      return status;
    },

    async authUpdateUser(parent, { id, input }, context) {     
      const response = await authUpdateUser(id, input, token);
      return response;
    }
  }

}

module.exports = { authenticationResolvers }
