const inscriptionAccess = require('../../../MS_access/inscriptionAccess')
const { getGroupById, createOrUpdateGroup } = require('../../../MS_access/courseSearchAccess')
const decoderToken = require('../../../utils/decoderToken')
const { gradesStudentCancellationPetition } = require('../../../MS_access/gradesAccess')
const { getStoriesByUser, cancelCreditsLoss, cancelCreditsNoLoss } = require('../../../MS_access/academicHistoryAccess')

const removeStudentFromGroupsResolver = {
  Mutation: {
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

module.exports = { removeStudentFromGroupsResolver }
