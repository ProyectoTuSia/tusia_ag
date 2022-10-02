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
    async getAllGroupsOfSubject (_, { subject }) {
      return await inscriptionAccess.getAllGroupsOfSubject(subject)
    },
    async getGroupOfSubject (_, { subject, number }) {
      return await inscriptionAccess.getGroupOfSubject(subject, number)
    },
    async getCareersOfStudent (_, { username }) {
      return await inscriptionAccess.getCareersOfStudent(username)
    },
    async getStudentCoursedSubjects (_, { username }) {
      return await inscriptionAccess.getStudentCoursedSubjects(username)
    },
    async getCareerSubjectsByTypology (_, { careerCode, typology }) {
      return await inscriptionAccess.getCareerSubjectsByTypology(careerCode, typology)
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
    async addStudentToGroup (_, { studentUsername, subjectCode, groupNumber }) {
      return await inscriptionAccess.addStudentToGroup(studentUsername, subjectCode, groupNumber)
    }
  }
}
module.exports = { inscriptionResolvers }
