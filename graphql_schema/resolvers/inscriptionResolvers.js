const inscriptionAccess = require('../../MS_access/inscriptionAccess')

const inscriptionResolvers = {
  // queries
  Query: {
    async ins_getAllStudents () {
      return await inscriptionAccess.getAllStudents()
    },
    async ins_getStudentByUsername (_, { username }) {
      return await inscriptionAccess.getStudentByUsername(username)
    },
    async ins_getAllCareers () {
      return await inscriptionAccess.getAllCareers()
    },
    async ins_getAllGroupsOfSubject (_, { subjectCode }) {
      return await inscriptionAccess.getAllGroupsOfSubject(subjectCode)
    },
    async ins_getGroupOfSubject (_, { subjectCode, groupNumber }) {
      return await inscriptionAccess.getGroupOfSubject(subjectCode, groupNumber)
    },
    async ins_getCareersOfStudent (_, { username }) {
      return await inscriptionAccess.getCareersOfStudent(username)
    },
    async ins_getStudentCoursedSubjects (_, { username }) {
      return await inscriptionAccess.getStudentCoursedSubjects(username)
    },
    async ins_getCareerSubjectsByTypology (_, { careerCode, typology }) {
      return await inscriptionAccess.getCareerSubjectsByTypology(careerCode, typology)
    },
    async ins_getStudentNotCoursedSubjectsInCareer (_, { careerCode, username }) {
      return await inscriptionAccess.getStudentNotCoursedSubjectsInCareer(careerCode, username)
    },
    async ins_getAllGroupsOfStudent (_, { username }) {
      return await inscriptionAccess.getAllGroupsOfStudent(username)
    },
    async ins_getSchedulesOfGroup (_, { subjectCode, groupNumber }) {
      return await inscriptionAccess.getSchedulesOfGroup(subjectCode, groupNumber)
    }
  },

  // mutations
  Mutation: {
    async ins_createOrUpdateStudent (_, { student }) {
      return await inscriptionAccess.createOrUpdateStudent(student)
    },
    async ins_createOrUpdateCareer (_, { career }) {
      return await inscriptionAccess.createOrUpdateCareer(career)
    },
    async ins_addCoursedSubjectToStudent (_, { subjectCode, studentUsername }) {
      return await inscriptionAccess.addCoursedSubjectToStudent(subjectCode, studentUsername)
    },
    async ins_addStudentToGroups (_, { list }) {
      return await inscriptionAccess.addStudentToGroups(list)
    },
    async ins_removeStudentFromGroups (_, { list }) {
      return await inscriptionAccess.removeStudentFromGroups(list)
    }
  }
}
module.exports = { inscriptionResolvers }
