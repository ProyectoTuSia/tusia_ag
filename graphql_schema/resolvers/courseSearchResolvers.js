const courseSearchAccess = require('../../MS_access/courseSearchAccess')
const courseSearchResolvers = {
  // Queries
  Query: {

  async getCampus () {
    return await courseSearchAccess.getCampus()
  }, 
  async getCampusById (_, { Id_campus }) {
    return await courseSearchAccess.getCampusById(Id_campus)
  },

  async getFaculty() {
    return await courseSearchAccess.getFaculty()
  },
  async getFacultyById(_, { Id_faculty }) {
    return await courseSearchAccess.getFacultyById(Id_faculty)
  },

  async getCareer() {
    return await courseSearchAccess.getCareer()
  },
  async getCareerById(_, { Id_career }) {
    return await courseSearchAccess.getCareerById(Id_career)
  },

  async getTypeTypology() {
    return await courseSearchAccess.getTypeTypology()
  },
  async getTypeTypologyById(_, { Id_typology }) {
    return await courseSearchAccess.getTypeTypologyById(Id_typology)
  },

  async getSubject() {
    return await courseSearchAccess.getSubject()
  },
  async getSubjectById(_, { Id_subject }) {
    return await courseSearchAccess.getSubjectById(Id_subject)
  },

  async getGroup () {
    return await courseSearchAccess.getGroup ()
  },
  async getGroupById(_, { Id_group }) {
    return await courseSearchAccess.getGroupById(Id_group)
  },

  async getSchedule () {
    return await courseSearchAccess.getSchedule ()
  },
  async getScheduleById(_, { Id_Schedule }) {
    return await courseSearchAccess.getScheduleById(Id_Schedule)
  },

  async getPlace() {
    return await courseSearchAccess.getPlace ()
  },
  async getPlaceById(_, { Id_place }) {
    return await courseSearchAccess.getPlaceById(Id_place)
  },

  async getCondition() {
    return await courseSearchAccess.getCondition ()
  },
  async getConditionById(_, { Id_condition }) {
    return await courseSearchAccess.getConditionById(Id_condition)
  },

  async getSubjectsconditions() {
    return await courseSearchAccess.getSubjectsconditions ()
  },
  async getSubjectsconditionsById(_, { Id_Subjectconditions }) {
    return await courseSearchAccess.getSubjectsconditionsById(Id_Subjectconditions)
  },

  async getTypeConditions() {
    return await courseSearchAccess.getTypeConditions ()
  },
  async getTypeConditionsById(_, { Id_types }) {
    return await courseSearchAccess.getTypeConditionsById(Id_types)
  },
  async getGroupBySubject(_, { Id_subject }) {
    return await courseSearchAccess.getGroupBySubject(Id_subject)
  },

  // Mutations
  },
  Mutation: {
    async createOrUpdateGroup (_, { group }) {
      return await courseSearchAccess.createOrUpdateGroup(group)
    },
  }

}
module.exports = { courseSearchResolvers }
