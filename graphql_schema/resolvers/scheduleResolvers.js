const { getSchedule, putSchedule} = require('../../MS_access/scheduleAccess.js')

const scheduleResolvers = {
  // Queries
  Query : {
    async sc_getSchedule(_, params){
      const userId = params.userId
      const scheduleData = await getSchedule(userId)
      console.log(`the schedule data is: ${scheduleData}`)
      return scheduleData
    }
  },
  // Mutations
   Mutation : {
    async sc_putSchedule (_, {schedule}) {
      const sendRequest = await putSchedule(schedule)
      return sendRequest
    }

   }


}
module.exports = { scheduleResolvers }
