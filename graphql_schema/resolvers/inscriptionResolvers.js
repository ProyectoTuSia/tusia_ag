const inscriptionAccess = require('../../MS_access/inscriptionAccess')

const inscriptionResolvers = {
  // Queries
  Query: {
    async getAllStudents () {
      return await inscriptionAccess.getAllStudents()
    },
    async getStudentByUsername (_, { username }) {
      return await inscriptionAccess.getStudentByUsername(username)
    },
    async getAllCareers () {
      return await inscriptionAccess.getAllCareers()
    },
    async getAllGroupsOfSubject (_, { subjectCode }) {
      return await inscriptionAccess.getAllGroupsOfSubject(subjectCode)
    },
    async getGroupOfSubject (_, { subjectCode, groupNumber }) {
      return await inscriptionAccess.getGroupOfSubject(subjectCode, groupNumber)
    },
    async getCareersOfStudent (_, { username }) {
      return await inscriptionAccess.getCareersOfStudent(username)
    },
    async getStudentCoursedSubjects (_, { username }) {
      return await inscriptionAccess.getStudentCoursedSubjects(username)
    },
    async getCareerSubjectsByTypology (_, { careerCode, typology }) {
      return await inscriptionAccess.getCareerSubjectsByTypology(careerCode, typology)
    },
    async getStudentNotCoursedSubjectsInCareer (_, { careerCode, username }) {
      return await inscriptionAccess.getStudentNotCoursedSubjectsInCareer(careerCode, username)
    },
    async getAllGroupsOfStudent (_, { username }) {
      return await inscriptionAccess.getAllGroupsOfStudent(username)
    },
    async getSchedulesOfGroup (_, { subjectCode, groupNumber }) {
      return await inscriptionAccess.getSchedulesOfGroup(subjectCode, groupNumber)
    }
  },

  // Mutations
  Mutation: {
    async createOrUpdateStudent (_, { student }) {
      return await inscriptionAccess.createOrUpdateStudent(student)
    },
    async createOrUpdateCareer (_, { career }) {
      return await inscriptionAccess.createOrUpdateCareer(career)
    },
    async addCoursedSubjectToStudent (_, { subjectCode, studentUsername }) {
      return await inscriptionAccess.addCoursedSubjectToStudent(subjectCode, studentUsername)
    },
    async addStudentToGroups (_, { list }) {
      return await inscriptionAccess.addStudentToGroups(list)
    },
    async removeStudentFromGroups (_, { list }) {
      return await inscriptionAccess.removeStudentFromGroups(list)
    }
  }
}
module.exports = { inscriptionResolvers }
