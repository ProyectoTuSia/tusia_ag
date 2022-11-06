const { academicHistoryTypeDefs } = require('./academicHistoryTypeDefs')
const { authenticationTypeDefs } = require('./authenticationTypeDefs')
const { courseSearchTypeDefs } = require('./courseSearchTypeDefs')
const { gradesTypeDefs } = require('./gradesTypeDefs')
const { inscriptionTypeDefs } = require('./inscriptionTypeDefs')
const { scheduleTypeDefs } = require('./scheduleTypeDefs')
const { externalCoursesTypeDefs } = require('./externalCoursesTypeDefs')


const typeDefs = [academicHistoryTypeDefs, authenticationTypeDefs, courseSearchTypeDefs, gradesTypeDefs, inscriptionTypeDefs, scheduleTypeDefs, externalCoursesTypeDefs]

module.exports = typeDefs
