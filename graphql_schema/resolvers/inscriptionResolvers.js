const inscriptionAccess = require('../../MS_access.js/inscriptionAccess')

const inscriptionResolvers = {
  // Queries
  Query: {
    async getAllStudents () {
      return await inscriptionAccess.getAllStudents()
    },
    async getStudentByUsername (_, { username }) {
      return await inscriptionAccess.getStudentByUsername(username)
    }
  },

  // Mutations
  Mutation: {
    async createStudent (_, { student }) {
      return await inscriptionAccess.createStudent(student)
    }
  }
}
module.exports = { inscriptionResolvers }
