const { getSchedule, putSchedule } = require('../../../MS_access/scheduleAccess.js')

const scheduleResolvers = {
  // Queries
  Query: {
    async sc_getSchedule (_, params) {
      const userId = params.userId
      console.log(params.userId)
      const scheduleData = await getSchedule(userId)
      console.log(`the schedule data is: ${scheduleData.data.monday[0].professor}`)
      return scheduleData.data
    }
  },
  // Mutations
  Mutation: {
    async sc_putSchedule (_, { schedule }) {
      const sendRequest = await putSchedule(schedule)
      return sendRequest
    }

  }

}
module.exports = { scheduleResolvers }
