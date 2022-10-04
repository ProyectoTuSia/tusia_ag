const inscriptionAccess = require('../../MS_access/inscriptionAccess')
const { getGroupById, createOrUpdateGroup } = require('../../MS_access/courseSearchAccess')
const decoderToken = require('../../utils/decoderToken');

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
      const { token } = list;
      
      if(decoderToken.getClaimsToken(token).role !== 'Estudiante') {
        return 'Error 401: Unauthorized. Your role to perform this action must be "student".';
      }

      return await inscriptionAccess.addCoursedSubjectToStudent(subjectCode, studentUsername)
    },
    async ins_addStudentToGroups (_, { list }) {
      const { token } = list;

      if(decoderToken.getClaimsToken(token).role !== 'Estudiante') {
        return 'Error 401: Unauthorized. Your role to perform this action must be "student".';
      }

      const inscriptionStatus = await inscriptionAccess.addStudentToGroups(list)
      if (inscriptionStatus) {
        for (const course of list) {
          console.log(course)
          // Actualizar cupos del grupo
          const courseInfo = await getGroupById(parseInt(course.subject_group_subject_code.toString() + course.subject_group_number.toString()))
          console.log(courseInfo)
          courseInfo.Slots = courseInfo.Slots - 1
          await createOrUpdateGroup(courseInfo)
          // Actualizar las notas 

          // Agregar al horario

          // Agregar a la historia académica
        }
      }
      return inscriptionStatus
    },
    async ins_removeStudentFromGroups (_, { list }) {
      const { token } = list;

      if(decoderToken.getClaimsToken(token).role !== 'Estudiante') {
        return 'Error 401: Unauthorized. Your role to perform this action must be "student".';
      }

      return await inscriptionAccess.removeStudentFromGroups(list)
    }
  }
}
module.exports = { inscriptionResolvers }
