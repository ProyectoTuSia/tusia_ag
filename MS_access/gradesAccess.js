// Manage REST communication with microservice
const fetch = require('node-fetch')

const getGroupGrades = async (courseCode, courseGroup) => {
  const url = `http://93.188.164.106:8086/grades/${courseCode}/${courseGroup}`
  return await fetch(url, {
    method: 'GET'
  })
    .then((response) => {
      const result = response.json()
      return result
    }
    ).catch(error => console.log(error))
}

const updateGradeWeights = async (courseCode, courseGroup, weights) => {
  const url = 'http://93.188.164.106:8086/weights'
  return await fetch(url, {
    method: 'PUT',
    BODY: JSON.stringify({
      code: courseCode,
      group_number: courseGroup,
      weights
    })
  })
    .then(() => {
      return JSON.stringify({ status: 'success' })
    }
    ).catch(error => {
      console.log(error)
      return JSON.stringify({ status: 'failure' })
    }
    )
}

module.exports = { getGroupGrades, updateGradeWeights }
