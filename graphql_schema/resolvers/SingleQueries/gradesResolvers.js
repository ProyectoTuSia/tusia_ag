const { getGroupGradesPetition, updateGradeWeightsPetition, updateStudentGradesPetition, getGradeWeightsPetition, getAllProfessorCourses, getAllCourses } = require('../../../MS_access/gradesAccess.js')

const gradesResolvers = {
  // Queries
  Query: {
    async gm_getGroupGrades (parent, args, context, info) {
      let retrievedGrades = await getGroupGradesPetition(args.courseCode, args.groupCode)
      retrievedGrades = retrievedGrades.results
      retrievedGrades.map((grade) => {
        grade.weight = grade.weight.low
        if (grade.grade.low !== undefined) {
          grade.grade = grade.grade.low
        }
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
    },
    async gm_getProfessorGroups (parent, args, context, info) {
      let courses = await getAllProfessorCourses(args.professorUsername)
      courses = courses.results
      courses.map((group) => {
        group.courseCode = group.courseCode.low
        group.groupNumber = group.groupNumber.low
        return group
      })
      return courses
    },
    async gm_getAllCourses (parent, args, context, info) {
      let courses = await getAllCourses()
      courses = courses.results
      courses.map((group) => {
        group.courseCode = group.courseCode.low
        group.groupNumber = group.groupNumber.low
        return group
      })
      const dedup = [...new Set(courses.map(m => `${m.courseCode}:${m.name}:${m.groupNumber}`))].map(m => {
        const [courseCode, name, groupNumber] = m.split(':').map(n => n)
        return { courseCode, courseName: name, groupNumber }
      })
      return dedup
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
    }
  }

}
module.exports = { gradesResolvers }
