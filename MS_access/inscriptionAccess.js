// Manage REST communication with microservice
const requestpromisenative = require('request-promise-native')
const host = 'localhost'

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

const getAllGroupsOfSubject = async (subjectCode) => {
  const options = {
    uri: 'http://' + host + ':8071/subjectgroup/' + String(subjectCode),
    json: true
  }
  return await requestpromisenative(options)
}

const getGroupOfSubject = async (subjectCode, number) => {
  const options = {
    uri: 'http://' + host + ':8071/subjectgroup/' + String(subjectCode) + '/' + String(number),
    json: true
  }
  return await requestpromisenative(options)
}

const getCareersOfStudent = async (username) => {
  const options = {
    uri: 'http://' + host + ':8071/studenthascareer/' + username,
    json: true
  }
  return await requestpromisenative(options)
}

const getStudentCoursedSubjects = async (username) => {
  const options = {
    uri: 'http://' + host + ':8071/studentcoursedsubject/' + username,
    json: true
  }
  return await requestpromisenative(options)
}

const getCareerSubjectsByTypology = async (careerCode, typology) => {
  const options = {
    body: {
      career_code: careerCode,
      typology: typology
    },
    uri: 'http://' + host + ':8071/careerhassubject/',
    json: true
  }
  return await requestpromisenative(options)
}

const getStudentNotCoursedSubjectsInCareer = async (careerCode, username) => {
  const options = {
    uri: 'http://' + host + ':8071/careerhassubject/' + 'not/' + careerCode + '/' + username,
    json: true
  }
  return await requestpromisenative(options)
}

const getAllGroupsOfStudent = async (username) => {
  const options = {
    uri: 'http://' + host + ':8071/studenthassubjectgroup/' + username,
    json: true
  }
  return await requestpromisenative(options)
}

const getSchedulesOfGroup = async (subjectCode, groupNumber) => {
  const options = {
    uri: 'http://' + host + ':8071/subjectgrouphasschedule/' + String(subjectCode) + '/' + String(groupNumber),
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

const addCoursedSubjectToStudent = async (subjectCode, studentUsername) => {
  const options = {
    uri: 'http://' + host + ':8071/studentcoursedsubject/',
    method: 'POST',
    body: {
      subject_code: subjectCode,
      student_username: studentUsername
    },
    json: true
  }
  return await requestpromisenative(options)
}

const addStudentToGroups = async (list) => {
  const options = {
    uri: 'http://' + host + ':8071/studenthassubjectgroup/',
    method: 'POST',
    body: list,
    json: true
  }
  return await requestpromisenative(options)
}

const removeStudentFromGroups = async (list) => {
  const options = {
    uri: 'http://' + host + ':8071/studenthassubjectgroup/',
    method: 'DELETE',
    body: list,
    json: true
  }
  return await requestpromisenative(options)
}

module.exports = {
  getAllStudents,
  getStudentByUsername,
  getAllCareers,
  getAllGroupsOfSubject,
  getGroupOfSubject,
  getCareersOfStudent,
  getStudentCoursedSubjects,
  getCareerSubjectsByTypology,
  getStudentNotCoursedSubjectsInCareer,
  getAllGroupsOfStudent,
  getSchedulesOfGroup,
  createOrUpdateStudent,
  createOrUpdateCareer,
  addCoursedSubjectToStudent,
  addStudentToGroups,
  removeStudentFromGroups
}
