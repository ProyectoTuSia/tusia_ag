const inscriptionAccess = require('../../MS_access/inscriptionAccess')
const { getGroupById, createOrUpdateGroup, getScheduleById, getPlaceById } = require('../../MS_access/courseSearchAccess')
const decoderToken = require('../../utils/decoderToken')
const { gradesStudentInscriptionPetition, gradesStudentCancellationPetition } = require('../../MS_access/gradesAccess')
const { getStoriesByUser, updateCreditsSigned, cancelCreditsLoss, cancelCreditsNoLoss } = require('../../MS_access/academicHistoryAccess')
const { authGetUserById } = require('../../MS_access/authenticationAccess')
const createSchedule = require('../../RabbitAccess/inscriptionScheduleQueue')



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
      // const { token } = list

      // if (decoderToken.getClaimsToken(token).role !== 'Estudiante' ||
      //     (Date.now() >= decoderToken.getClaimsToken(token).exp * 1000)) {
      //   return 'Error 401: Unauthorized. Your role to perform this action must be "student".'
      // }

      return await inscriptionAccess.addCoursedSubjectToStudent(subjectCode, studentUsername)
    },
    async ins_addStudentToGroups (_, { list }) {
      // const { token } = list[0]


      // if (decoderToken.getClaimsToken(token).role !== 'Estudiante' ||
      //     (Date.now() >= decoderToken.getClaimsToken(token).exp * 1000)) {
      //   return 'Error 401: Unauthorized. Your role to perform this action must be "student".'
      // }
      console.log(list[0].student_username)
      const academicHistory = list.length > 0 ? await getStoriesByUser(list[0].student_username) : [{ career_code: '' }]
      const career = academicHistory[0].career_code
      const idStory = academicHistory[0].id
      const inscriptionStatus = await inscriptionAccess.addStudentToGroups(list)
      const inscriptionGroupsByTypology = {
        fundamentacion_obligatoria_signed: 0,
        fundamentacion_optativa_signed: 0,
        disciplinar_obligatoria_signed: 0,
        disciplinar_optativa_signed: 0,
        libre_eleccion_signed: 0,
        nivelacion_signed: 0,
        trabajo_de_grado_signed: 0,
        total_signed: 0
      }
      let jsonSchedule = {
        "userId": list.length > 0 ? list[0].student_username : "",
        "monday": [],
        "tuesday": [],
        "wednesday": [],
        "thursday": [],
        "friday": [],
        "saturday": []
    }

      if (inscriptionStatus) {
        for (const course of list) {
          scheduleCourse = {
  
          }
          // Actualizar cupos del grupo
          const courseInfo = await getGroupById(parseInt(course.subject_group_subject_code.toString() + course.subject_group_number.toString()))
          courseInfo.Slots = courseInfo.Slots - 1
          await createOrUpdateGroup(courseInfo)
          // Actualizar las notas
          // const userBasicInfo = await authGetUserById('a52252c8-b3b5-44ba-9304-5c3ef39de89b', token)
          // await gradesStudentInscriptionPetition(course.student_username, userBasicInfo.basicData.fullName, userBasicInfo.basicData.fullName, course.subject_group_subject_code, course.subject_group_number)
          
          
          // Agregar a la historia académica
          const subjectInformation = await inscriptionAccess.getSubjectOfCareer(career, course.subject_group_subject_code)
          const typology = subjectInformation.typology.replace(' ', '_') + '_signed'
          inscriptionGroupsByTypology[typology] = inscriptionGroupsByTypology[typology] + subjectInformation.subject.credits
          
          // Agregar al horario
          const groupInfo = await inscriptionAccess.getGroupOfSubject(course.subject_group_subject_code, course.subject_group_number )

          scheduleCourse["courseId"] = course.subject_group_subject_code
          scheduleCourse["name"] = groupInfo.subject.name
          scheduleCourse["professor"] = courseInfo.Teacher
          scheduleCourse["credits"] = groupInfo.subject.credits
          scheduleCourse["group"] = course.subject_group_number
          scheduleCourse["type"] = subjectInformation.typology

          
          for(const id  of courseInfo.Id_schedule ){
            const scheduleInfo = await getScheduleById(id)
            scheduleCourse["timetable"] = `${scheduleInfo.Star_time}-${scheduleInfo.End_time}`
            const placeInfo = await getPlaceById(scheduleInfo.Id_place)
            scheduleCourse["building"] = placeInfo.Place_nametower
            scheduleCourse["classroom"] = placeInfo.Place_numbersalon

            jsonSchedule[scheduleInfo.day_name].push(scheduleCourse ) 
          }


        }
        jsonSchedule = JSON.stringify(jsonSchedule)
        console.log(jsonSchedule)
        createSchedule.createSchedule(jsonSchedule)
        console.log("sobrevivi")

        inscriptionGroupsByTypology.total_signed = Object.keys(inscriptionGroupsByTypology).reduce((previous, key) => { return previous + inscriptionGroupsByTypology[key] }, 0)
        await updateCreditsSigned(idStory, inscriptionGroupsByTypology)
      }
      return inscriptionStatus
    },
    async ins_removeStudentFromGroups (_, { list }) {
      const { token } = list[0]
      const { creditLoss } = list[0]

      if (decoderToken.getClaimsToken(token).role !== 'Estudiante' ||
          (Date.now() >= decoderToken.getClaimsToken(token).exp * 1000)) {
        return 'Error 401: Unauthorized. Your role to perform this action must be "student".'
      }

      const academicHistory = list.length > 0 ? await getStoriesByUser(list[0].student_username) : [{ career_code: '' }]
      const career = academicHistory[0].career_code
      const idStory = academicHistory[0].id
      const cancellationStatus = await inscriptionAccess.removeStudentFromGroups(list)
      const cancellationGroupsByTypology = {
        fundamentacion_obligatoria: 0,
        fundamentacion_optativa: 0,
        disciplinar_obligatoria: 0,
        disciplinar_optativa: 0,
        libre_eleccion: 0,
        nivelacion: 0,
        trabajo_de_grado: 0,
        total: 0
      }
      if (cancellationStatus) {
        for (const course of list) {
          // Actualizar cupos del grupo
          const courseInfo = await getGroupById(parseInt(course.subject_group_subject_code.toString() + course.subject_group_number.toString()))
          console.log(courseInfo)
          courseInfo.Slots = courseInfo.Slots + 1
          await createOrUpdateGroup(courseInfo)
          // Actualizar las notas
          await gradesStudentCancellationPetition(course.student_username, course.subject_group_subject_code, course.subject_group_number)
          // Agregar al horario
          // Agregar a la historia académica
          const subjectInformation = await inscriptionAccess.getSubjectOfCareer(career, course.subject_group_subject_code)
          const typology = subjectInformation.typology.replace(' ', '_')
          cancellationGroupsByTypology[typology] = cancellationGroupsByTypology[typology] + subjectInformation.subject.credits
        }
        cancellationGroupsByTypology.total = Object.keys(cancellationGroupsByTypology).reduce((previous, key) => { return previous + cancellationGroupsByTypology[key] }, 0)

        creditLoss ? await cancelCreditsLoss(idStory, cancellationGroupsByTypology) : await cancelCreditsNoLoss(idStory, cancellationGroupsByTypology)
      }
      return cancellationStatus
    }
  }
}
module.exports = { inscriptionResolvers }
