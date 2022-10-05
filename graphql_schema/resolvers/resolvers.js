const _ = require('lodash')
const { addStudentToGroupsResolver } = require('./CompoundQueries/addStudentToGroups')
const { removeStudentFromGroupsResolver } = require('./CompoundQueries/removeStudentFromGroupsResolver')
const { academicHistoryResolvers } = require('./SingleQueries/academicHistoryResolvers')
const { authenticationResolvers } = require('./SingleQueries/authenticationResolvers')
const { courseSearchResolvers } = require('./SingleQueries/courseSearchResolvers')
const { gradesResolvers } = require('./SingleQueries/gradesResolvers')
const { inscriptionResolvers } = require('./SingleQueries/inscriptionResolvers')
const { scheduleResolvers } = require('./SingleQueries/scheduleResolvers')


const resolvers = _.merge({}, academicHistoryResolvers, authenticationResolvers, courseSearchResolvers, gradesResolvers, inscriptionResolvers, scheduleResolvers, addStudentToGroupsResolver, removeStudentFromGroupsResolver)

module.exports = resolvers
