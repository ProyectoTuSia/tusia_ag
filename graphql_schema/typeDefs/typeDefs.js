const { academicHistoryTypeDefs } = require('./academicHistoryTypeDefs')
const { authenticationTypeDefs } = require('./authenticationTypeDefs')
const { courseSearchTypeDefs } = require('./courseSearchTypeDefs')
const { gradesTypeDefs } = require('./gradesTypeDefs')
const { inscriptionTypeDefs } = require('./inscriptionTypeDefs')
const { scheduleTypeDefs } = require('./scheduleTypeDefs')

const typeDefs = [academicHistoryTypeDefs, authenticationTypeDefs, courseSearchTypeDefs, gradesTypeDefs, inscriptionTypeDefs, scheduleTypeDefs]

module.exports = typeDefs
