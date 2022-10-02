//import { getAverages } from "../../MS_access.js/academicHistoryAccess"
const aH = require('../../MS_access.js/academicHistoryAccess')


const academicHistoryResolvers = {
  // Queries
  Query: {
   async getAverages(_, {id}){
			return await aH.getAverages(id)
    },
    async getCareerCredits(_, {code}){
			return await aH.getCareerCredits(code)
    },
    async getCreditHistory(_, {id}){
			return await aH.getCreditHistory(id)
    },
    async getCreditSummary(_, {id}){
			return await aH.getCreditSummary(id)
    },
    async getAcademicStory(_, {id}){
			return await aH.getAcademicStory(id)
    },
    async getStudentSubjects(_, {id}){
			return await aH.getStudentSubjects(id)
    },
       
  },
  // Mutations
  Mutation:{
    async updateCreditsSigned(_, {id, creditsSigned}){
			return await aH.updateCreditsSigned(id,creditsSigned)
    },
    async cancelCreditsLoss(_, {id, credits}){
			return await aH.cancelCreditsLoss(id,credits)
    },
    async cancelCreditsNoLoss(_, {id, credits}){
			return await aH.cancelCreditsNoLoss(id,credits)
    },
    async updateAverages(_, {id, averages}){
			return await aH.updateAverages(id,averages)
    },
    async updateCreditsTaken(_, {id, creditsTaken}){
			return await aH.updateCreditsTaken(id,creditsTaken)
    },
    async newStudentSubjects(_, {id, studentSubject}){
			return await aH.newStudentSubjects(id,studentSubject)
    },
  }

}
module.exports = { academicHistoryResolvers }
