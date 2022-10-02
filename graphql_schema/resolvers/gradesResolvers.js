const { getGroupGrades, updateGradeWeights } = require('../../MS_access/gradesAccess.js')

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
module.exports = { gradesResolvers }
