// Manage REST communication with microservice
<<<<<<< HEAD
const fetch = require('node-fetch')
const host = 'http://93.188.164.106:8086'

const getGroupGradesPetition = async (courseCode, courseGroup) => {
  const url = host + `/grades/${courseCode}/${courseGroup}`
  return await fetch(url, {
    method: 'GET'
  })
    .then((response) => {
      const result = response.json()
      return result
    }
    ).catch(error => console.log(error))
}

const getGradeWeightsPetition = async (courseCode, courseGroup) => {
  const url = host + `/weights/${courseCode}/${courseGroup}`
  return await fetch(url, {
    method: 'GET'
  })
    .then((response) => {
      const result = response.json()
      return result
    }
    ).catch(error => console.log(error))
}

const updateGradeWeightsPetition = async (courseCode, courseGroup, weights) => {
  const url = host + '/grades/updateWeights'
  const body = JSON.stringify({
    code: courseCode,
    group_number: courseGroup,
    weights: weights.weights
  })
  return await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body
  })
    .then(async (response) => {
      return JSON.stringify(response.json())
    }
    ).catch(error => {
      console.log(error)
      return JSON.stringify(error)
    }
    )
}

const updateStudentGradesPetition = async (courseCode, courseGroup, grades) => {
  const url = host + `/grades/updateGrades/${courseCode}/${courseGroup}`
  const body = JSON.stringify({
    grades: grades.grades
  })
  return await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body
  })
    .then(async (response) => {
      return JSON.stringify(response.json())
    }
    ).catch(error => {
      console.log(error)
      return JSON.stringify(error)
    }
    )
}

const gradesStudentInscriptionPetition = async (username, firstname, lastname, code, groupNumber) => {
  const url = host + '/inscription'
  const body = JSON.stringify({
    username,
    name: firstname,
    lastname,
    code,
    group_number: groupNumber
  })
  return await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body
  })
    .then(async (response) => {
      return JSON.stringify(response.json())
    }
    ).catch(error => {
      console.log(error)
      return JSON.stringify(error)
    }
    )
}

module.exports = { getGroupGradesPetition, updateGradeWeightsPetition, updateStudentGradesPetition, getGradeWeightsPetition, gradesStudentInscriptionPetition }
=======
>>>>>>> inscripcion
