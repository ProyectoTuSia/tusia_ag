// import { getAverages } from "../../MS_access.js/academicHistoryAccess"
const aH = require('../../MS_access.js/academicHistoryAccess')

const academicHistoryResolvers = {
  // Queries
  Query: {
    async aH_getAverages (_, { id }) {
      return await aH.getAverages(id)
    },
    async aH_getCareerCredits (_, { code }) {
      return await aH.getCareerCredits(code)
    },
    async aH_getCreditHistory (_, { id }) {
      return await aH.getCreditHistory(id)
    },
    async aH_getCreditSummary (_, { id }) {
      return await aH.getCreditSummary(id)
    },
    async aH_getAcademicStory (_, { id }) {
      return await aH.getAcademicStory(id)
    },
    async aH_getStudentSubjects (_, { id }) {
      return await aH.getStudentSubjects(id)
    }

  },
  // Mutations
  Mutation: {
    async aH_updateCreditsSigned (_, { id, creditsSigned }) {
      return await aH.updateCreditsSigned(id, creditsSigned)
    },
    async aH_cancelCreditsLoss (_, { id, credits }) {
      return await aH.cancelCreditsLoss(id, credits)
    },
    async aH_cancelCreditsNoLoss (_, { id, credits }) {
      return await aH.cancelCreditsNoLoss(id, credits)
    },
    async aH_updateAverages (_, { id, averages }) {
      return await aH.updateAverages(id, averages)
    },
    async aH_updateCreditsTaken (_, { id, creditsTaken }) {
      return await aH.updateCreditsTaken(id, creditsTaken)
    },
    async aH_newStudentSubjects (_, { id, studentSubject }) {
      return await aH.newStudentSubjects(id, studentSubject)
    }
  }

}
module.exports = { academicHistoryResolvers }
