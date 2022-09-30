const _ = require('lodash')
const { academicHistoryResolvers } = require('./academicHistoryResolvers')
const { authenticationResolvers } = require('./authenticationResolvers')
const { courseSearchResolvers } = require('./courseSearchResolvers')
const { gradesResolvers } = require('./gradesResolvers')
const { inscriptionResolvers } = require('./inscriptionResolvers')
const { scheduleResolvers } = require('./scheduleResolvers')

const resolvers = _.merge({}, academicHistoryResolvers, authenticationResolvers, courseSearchResolvers, gradesResolvers, inscriptionResolvers, scheduleResolvers)

module.exports = resolvers
