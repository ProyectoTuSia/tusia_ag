const { getGroupGradesPetition, updateGradeWeightsPetition, updateStudentGradesPetition, getGradeWeightsPetition } = require('../../MS_access/gradesAccess.js')

const gradesResolvers = {
  // Queries
  Query: {
    async gm_getGroupGrades (parent, args, context, info) {
      let retrievedGrades = await getGroupGradesPetition(args.courseCode, args.groupCode)
      retrievedGrades = retrievedGrades.results
      retrievedGrades.map((grade) => {
        grade.weight = grade.weight.low
        delete Object.assign(grade, { value: grade.grade }).grade
        return grade
      })

      return retrievedGrades
    },
    async gm_getGroupWeights (parent, args, context, info) {
      let retrievedWeights = await getGradeWeightsPetition(args.courseCode, args.groupCode)
      retrievedWeights = retrievedWeights.results
      retrievedWeights.map((weight) => {
        weight.weight = weight.weight.low
        return weight
      })
      const dedup = [...new Set(retrievedWeights.map(m => `${m.course_code}:${m.course_group}:${m.description}:${m.weight}`))].map(m => {
        const [courseCode, courseGroup, description, weight] = m.split(':').map(n => n | 0)
        return { course_code: courseCode, course_group: courseGroup, description, weight }
      })
      console.log(dedup)

      return dedup
    },
    async gm_getStudentGradesInGroup (parent, args, context, info) {
      let retrievedGrades = await getGroupGradesPetition(args.courseCode, args.groupCode)
      retrievedGrades = retrievedGrades.results
      retrievedGrades.map((grade) => {
        grade.weight = grade.weight.low
        return grade
      })
      retrievedGrades = retrievedGrades.filter(grade => grade.username === args.username)

      return retrievedGrades
    }
  },
  // Mutations
  Mutation: {
    async gm_updateGradeWeights (_, { courseCode, courseGroup, weights }, context) {
      const sendRequest = await updateGradeWeightsPetition(courseCode, courseGroup, weights)
      console.log(weights)
      return { status: sendRequest, courseCode, groupNumber: courseGroup, weights: weights.weights }
    },
    async gm_updateStudentsGrades (_, { courseCode, courseGroup, grades }, context) {
      const sendRequest = await updateStudentGradesPetition(courseCode, courseGroup, grades)
      return { status: sendRequest, courseCode, groupNumber: courseGroup, grades: grades.grades }
    },
    async gm_consolidateGroupGrades (_, { courseCode, courseGroup }, context) {
      const studentGrades = await getGroupGradesPetition(courseCode, courseGroup)
      // console.log(studentGrades)
      const groupFinalGrades = {}
      for (const grade of studentGrades.results) {
        if (!(groupFinalGrades.hasOwnProperty(grade.username))) {
          groupFinalGrades[grade.username] = [[grade.grade, grade.weight.low]]
        } else { groupFinalGrades[grade.username] = [...groupFinalGrades[grade.username], [grade.grade, grade.weight.low]] }
      }
      for (const student of Object.keys(groupFinalGrades)) {
        console.log(student)
        groupFinalGrades[student] = groupFinalGrades[student].reduce((prev, curr) => prev + (curr[0] * curr[1] / 100), 0)
      }
      console.log(groupFinalGrades)
      return Object.keys(groupFinalGrades).toString() + " " + Object.values(groupFinalGrades).toString()
    }
  }

}
module.exports = { gradesResolvers }
