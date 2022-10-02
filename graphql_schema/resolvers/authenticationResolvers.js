const { loginAuthentication, getAllUsers, getUserById, createUser, updateUser, deleteUser } = require("../../MS_access/authenticationAccess");

const authenticationResolvers = {
  Query: {
    async getAllUsers(parent, args, context)
    {
      const users = await getAllUsers(token);
      return users;
    },

    async getUserByID(parent, args, context)
    {
      const { id } = args;
      const user = await getUserById(id, token);
      return user;
    }
  },

  Mutation: {
    async createUser(parent, { input }, context)
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

      const response = await createUser(newUser, token);
      return response;
    },

    async deleteUser(parent, { id }, context) {
      const status = await deleteUser(id, token);
      return status;
    },

    async updateUser(parent, { id, input }, context) {     
      const response = await updateUser(id, input, token);
      return "response";
    }
  }

}

module.exports = { authenticationResolvers }
