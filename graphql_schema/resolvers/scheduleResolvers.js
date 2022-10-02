const { getSchedule, postSchedule} = require('../../MS_access/scheduleAccess.js')

const scheduleResolvers = {
  // Queries
  Query : {
    async sc_getSchedule(_, userId){
      const scheduleData = await sc_getSchedule(userId)
      return scheduleData
    }
  },
  // Mutations
   Mutation : {
    async sc_putSchedule (_, { schedule }) {
      const sendRequest = await sc_putSchedule( schedule)
      return sendRequest
    }

   }


}
module.exports = { scheduleResolvers }


const gradesResolvers = {
  // Queries
  Query: {
    async getGroupGrades (parent, args, context, info) {
      let retrievedGrades = await getGroupGrades(args.courseCode, args.groupCode)
      retrievedGrades = retrievedGrades.results
      retrievedGrades.map((grade) => {
        grade.weight = grade.weight.low
        return grade
      })
      return retrievedGrades
    },
    async getStudentGradesInGroup (parent, args, context, info) {
      let retrievedGrades = await getGroupGrades(args.courseCode, args.groupCode)
      retrievedGrades = retrievedGrades.results
      retrievedGrades.map((grade) => {
        grade.weight = grade.weight.low
        return grade
      })
      retrievedGrades = retrievedGrades.filter(grade => grade.username === args.username)

      return retrievedGrades
    }
    // async getGradeWeights (parent, args, context, info) {
    //   let retrievedGrades = await getGroupGrades(args.courseCode, args.groupCode)
    //   retrievedGrades = retrievedGrades.results
    //   retrievedGrades.map((grade) => {
    //     grade.weight = grade.weight.low
    //     return grade
    //   })
    //   retrievedGrades = retrievedGrades.filter(grade => grade.username === args.username)

    //   return retrievedGrades
    // }
  },
  // Mutations
  Mutation: {
    async updateGradeWeights (_, { courseCode, groupCode, weights }, context) {
      const sendRequest = await updateGradeWeights(courseCode, groupCode, weights)
      return sendRequest
    }
  }

}