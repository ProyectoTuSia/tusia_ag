// Manage REST communication with microservice
const requestpromisenative = require('request-promise-native')
const host = '34.133.154.193'

const getAllStudents = async () => {
  const options = {
    uri: 'http://' + host + ':8071/student',
    json: true
  }
  return await requestpromisenative(options)
}

const getStudentByUsername = async (username) => {
  const options = {
    uri: 'http://' + host + ':8071/student/' + username,
    json: true
  }
  return await requestpromisenative(options)
}

const getAllCareers = async () => {
  const options = {
    uri: 'http://' + host + ':8071/career',
    json: true
  }
  return await requestpromisenative(options)
}

const createOrUpdateStudent = async (student) => {
  const options = {
    uri: 'http://' + host + ':8071/student/',
    method: 'POST',
    body: {
      username: student.username,
      available_credits: student.available_credits
    },
    json: true
  }
  return await requestpromisenative(options)
}

const createOrUpdateCareer = async (career) => {
  const options = {
    uri: 'http://' + host + ':8071/career/',
    method: 'POST',
    body: {
      code: career.code,
      name: career.name
    },
    json: true
  }
  return await requestpromisenative(options)
}

module.exports = {
  getAllStudents,
  getStudentByUsername,
  getAllCareers,
  createOrUpdateStudent,
  createOrUpdateCareer
}
