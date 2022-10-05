const { getGroupGradesPetition } = require('../../../MS_access/gradesAccess.js')

const consolidateGradesResolver = {
  Mutation: {
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
      return Object.keys(groupFinalGrades).toString() + ' ' + Object.values(groupFinalGrades).toString()
    }
  }
}

module.exports = { consolidateGradesResolver }
