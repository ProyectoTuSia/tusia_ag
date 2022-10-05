const _ = require('lodash')
const { addStudentToGroupsResolver } = require('./CompoundQueries/addStudentToGroupsResolver')
const { consolidateGradesResolver } = require('./CompoundQueries/consolidateGradesResolver')
const { removeStudentFromGroupsResolver } = require('./CompoundQueries/removeStudentFromGroupsResolver')
const { academicHistoryResolvers } = require('./SingleQueries/academicHistoryResolvers')
const { authenticationResolvers } = require('./SingleQueries/authenticationResolvers')
const { courseSearchResolvers } = require('./SingleQueries/courseSearchResolvers')
const { gradesResolvers } = require('./SingleQueries/gradesResolvers')
const { inscriptionResolvers } = require('./SingleQueries/inscriptionResolvers')
const { scheduleResolvers } = require('./SingleQueries/scheduleResolvers')

const resolvers = _.merge({}, academicHistoryResolvers, authenticationResolvers, courseSearchResolvers, gradesResolvers, inscriptionResolvers, scheduleResolvers, addStudentToGroupsResolver, removeStudentFromGroupsResolver, consolidateGradesResolver)

module.exports = resolvers
