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
    }     
  }
  // Mutations

}
module.exports = { academicHistoryResolvers }
