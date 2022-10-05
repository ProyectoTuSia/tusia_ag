const inscriptionAccess = require('../../../MS_access/inscriptionAccess')
const { getGroupById, createOrUpdateGroup, getScheduleById, getPlaceById } = require('../../../MS_access/courseSearchAccess')
const decoderToken = require('../../../utils/decoderToken')
const { gradesStudentInscriptionPetition } = require('../../../MS_access/gradesAccess')
const { getStoriesByUser, updateCreditsSigned } = require('../../../MS_access/academicHistoryAccess')
const { authGetUserById } = require('../../../MS_access/authenticationAccess')
const createSchedule = require('../../../RabbitAccess/inscriptionScheduleQueue')

const addStudentToGroupsResolver = {
  Mutation: {
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
        userId: list.length > 0 ? list[0].student_username : '',
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: []
      }

      if (inscriptionStatus) {
        for (const course of list) {
          const scheduleCourse = {

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
          const groupInfo = await inscriptionAccess.getGroupOfSubject(course.subject_group_subject_code, course.subject_group_number)

          scheduleCourse.courseId = course.subject_group_subject_code
          scheduleCourse.name = groupInfo.subject.name
          scheduleCourse.professor = courseInfo.Teacher
          scheduleCourse.credits = groupInfo.subject.credits
          scheduleCourse.group = course.subject_group_number
          scheduleCourse.type = subjectInformation.typology

          for (const id of courseInfo.Id_schedule) {
            const scheduleInfo = await getScheduleById(id)
            scheduleCourse.timetable = `${scheduleInfo.Star_time}-${scheduleInfo.End_time}`
            const placeInfo = await getPlaceById(scheduleInfo.Id_place)
            scheduleCourse.building = placeInfo.Place_nametower
            scheduleCourse.classroom = placeInfo.Place_numbersalon

            jsonSchedule[scheduleInfo.day_name].push(scheduleCourse)
          }
        }
        jsonSchedule = JSON.stringify(jsonSchedule)
        console.log(jsonSchedule)
        createSchedule.createSchedule(jsonSchedule)

        inscriptionGroupsByTypology.total_signed = Object.keys(inscriptionGroupsByTypology).reduce((previous, key) => { return previous + inscriptionGroupsByTypology[key] }, 0)
        await updateCreditsSigned(idStory, inscriptionGroupsByTypology)
      }
      return inscriptionStatus
    }
  }
}

module.exports = { addStudentToGroupsResolver }
