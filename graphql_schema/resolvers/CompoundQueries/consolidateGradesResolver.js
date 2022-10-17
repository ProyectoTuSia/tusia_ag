const { getGroupGradesPetition } = require('../../../MS_access/gradesAccess.js')
const inscriptionAccess = require('../../../MS_access/inscriptionAccess')
const { getGroupById, createOrUpdateGroup, getScheduleById, getPlaceById } = require('../../../MS_access/courseSearchAccess')
const decoderToken = require('../../../utils/decoderToken')
const { gradesStudentInscriptionPetition } = require('../../../MS_access/gradesAccess')
const { getStoriesByUser, updateCreditsSigned, updateCreditsTaken, newStudentSubjects } = require('../../../MS_access/academicHistoryAccess')
const { authGetUserById } = require('../../../MS_access/authenticationAccess')
const createSchedule = require('../../../RabbitAccess/inscriptionScheduleQueue')

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

        const academicHistory = await getStoriesByUser(student)
        const career = academicHistory[0].career_code
        const academicHistoryID = academicHistory[0].id

        const academicHistoryCoursesSeen = {
          fundamentacion_obligatoria_taken: 0,
          fundamentacion_optativa_taken: 0,
          disciplinar_obligatoria_taken: 0,
          disciplinar_optativa_taken: 0,
          libre_eleccion_taken: 0,
          nivelacion_taken: 0,
          trabajo_de_grado_taken: 0,
          total_taken: 0,
          fundamentacion_obligatoria_approved: 0,
          fundamentacion_optativa_approved: 0,
          disciplinar_obligatoria_approved: 0,
          disciplinar_optativa_approved: 0,
          libre_eleccion_approved: 0,
          nivelacion_approved: 0,
          trabajo_de_grado_approved: 0,
          total_approved: 0
        }

        const subjectInformation = await inscriptionAccess.getSubjectOfCareer(career, courseCode)
        const takenTypology = subjectInformation.typology.replace(' ', '_') + '_taken'
        const approvedTypology = subjectInformation.typology.replace(' ', '_') + '_approved'
        academicHistoryCoursesSeen[takenTypology] = academicHistoryCoursesSeen[takenTypology] + subjectInformation.subject.credits

        const seenCourseInfo = {
          subject_code: Number(courseCode),
          tipology: subjectInformation.typology,
          period: '2022-2S',
          grade: Number(groupFinalGrades[student]),
          outcome: 'Reprobada'
        }

        if (groupFinalGrades[student] >= 3.0) {
          academicHistoryCoursesSeen[approvedTypology] += subjectInformation.subject.credits
          seenCourseInfo.outcome = 'Aprobada'
        }

        academicHistoryCoursesSeen.total_taken = Object.keys(academicHistoryCoursesSeen).reduce((previous, key) => { return key.indexOf('_taken') !== -1 ? previous + academicHistoryCoursesSeen[key] : previous }, 0)

        academicHistoryCoursesSeen.total_approved = Object.keys(academicHistoryCoursesSeen).reduce((previous, key) => { return key.indexOf('_approved') !== -1 ? previous + academicHistoryCoursesSeen[key] : previous }, 0)

        await updateCreditsTaken(academicHistoryID, academicHistoryCoursesSeen)
        await newStudentSubjects(academicHistoryID,seenCourseInfo)

        console.log(groupFinalGrades[student])
        console.log(seenCourseInfo)
      }

      return Object.keys(groupFinalGrades).toString() + ' ' + Object.values(groupFinalGrades).toString()
    }
  }
}

module.exports = { consolidateGradesResolver }
