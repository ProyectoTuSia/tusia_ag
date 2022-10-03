const {
  loginAuthentication,
  authGetAllUsers,
  authGetUserById,
  authCreateUser,
  authUpdateUser,
  authDeleteUser,
} = require("../../MS_access/authenticationAccess");

const authenticationResolvers = {
  Query: {
    async authGetAllUsers(parent, args, context) {
      const users = await authGetAllUsers(token);
      return users;
    },

    async authGetUserByID(parent, args, context) {
      const { id } = args;
      const user = await authGetUserById(id, token);
      return user;
    },
  },

  Mutation: {
    async authCreateUser(parent, { input }, context) {
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

        militaryPassbook,
      } = input;

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
          landlineTelephone,
        },

        birthData: {
          birthDate,
          countryBirth,
          departmentBirth,
          municipalityBirth,
          nationality,
        },

        healthData: {
          bloodType,
          rhFactor,
          eps,
        },

        responsible: {
          responsibleFatherData: {
            nameResponsibleParent: nameResponsibleParentFather,
            firstSurname: firstSurnameFather,
            secondSurname: secondSurnameFather,
            documentType: documentTypeFather,
            idNumber: idNumberFather,
          },
          responsibleMotherData: {
            nameResponsibleParent: nameResponsibleParentMother,
            firstSurname: firstSurnameMother,
            secondSurname: secondSurnameMother,
            documentType: documentTypeMother,
            idNumber: idNumberMother,
          },
        },

        originData: {
          address: addressOrigin,
          municipality: municipalityOrigin,
          department: departmentOrigin,
          postalCode: postalCodeOrigin,
          stratum,
        },

        residenceData: {
          address: addressResidence,
          municipality: municipalityResidence,
          department: departmentResidence,
          postalCode: postalCodeResidence,
          telephone,
        },

        militarySituation: {
          militaryPassbook,
        },
      };
      
      const response = await authCreateUser(newUser, token);
      return response;
    },

    async authDeleteUser(parent, { id }, context) {
      const status = await authDeleteUser(id, token);
      return status;
    },

    async authUpdateUser(parent, { id, input }, context) {
      const userInDb = await authGetUserById(id, token);

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

        militaryPassbook,
      } = input;

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
          landlineTelephone,
        },

        birthData: {
          birthDate,
          countryBirth,
          departmentBirth,
          municipalityBirth,
          nationality,
        },

        healthData: {
          bloodType,
          rhFactor,
          eps,
        },

        responsible: {
          responsibleFatherData: {
            nameResponsibleParent: nameResponsibleParentFather,
            firstSurname: firstSurnameFather,
            secondSurname: secondSurnameFather,
            documentType: documentTypeFather,
            idNumber: idNumberFather,
          },
          responsibleMotherData: {
            nameResponsibleParent: nameResponsibleParentMother,
            firstSurname: firstSurnameMother,
            secondSurname: secondSurnameMother,
            documentType: documentTypeMother,
            idNumber: idNumberMother,
          },
        },

        originData: {
          address: addressOrigin,
          municipality: municipalityOrigin,
          department: departmentOrigin,
          postalCode: postalCodeOrigin,
          stratum,
        },

        residenceData: {
          address: addressResidence,
          municipality: municipalityResidence,
          department: departmentResidence,
          postalCode: postalCodeResidence,
          telephone,
        },

        militarySituation: {
          militaryPassbook,
        },
      };

      userUpdated["password"] = userInDb["password"];

      for (let key in userUpdated) {
        for (let data in userUpdated[key]) {
          if (
            isNaN(data) &&
            userUpdated[key][data] === undefined &&
            key !== "responsible"
          ) {
            userUpdated[key][data] = userInDb[key][data];
          }
        }
      }

      for (let key in userUpdated["responsible"]) {
        for (let data in userUpdated["responsible"][key]) {
          if (
            isNaN(data) &&
            userUpdated["responsible"][key][data] === undefined
          ) {
            userUpdated["responsible"][key][data] = userInDb["responsible"][key][data];
          }
        }
      }

      const response = await authUpdateUser(id, userUpdated, token);
      return response;
    },
  },
};

module.exports = { authenticationResolvers };
