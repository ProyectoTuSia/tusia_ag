const inscriptionAccess = require('../../MS_access.js/inscriptionAccess')

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
    async getAllGroupsOfSubject (_, { subject }) {
      return await inscriptionAccess.getAllGroupsOfSubject(subject)
    },
    async getGroupOfSubject (_, { subject, number }) {
      return await inscriptionAccess.getGroupOfSubject(subject, number)
    }
  },

  // Mutations
  Mutation: {
    async createOrUpdateStudent (_, { student }) {
      return await inscriptionAccess.createOrUpdateStudent(student)
    },
    async createOrUpdateCareer (_, { career }) {
      return await inscriptionAccess.createOrUpdateCareer(career)
    }
  }
}
module.exports = { inscriptionResolvers }
