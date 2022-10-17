const axios = require('axios')
// import axios from "axios";

// Manage REST communication with microservice

const getSchedule = async (userId) => {
  const url = `http://35.222.42.133:8000/consulta_horario/${userId}`
  try {
    const response = await axios.get(url)
    const scheduleData = response.data.data
    console.log(response)
    return scheduleData
  } catch (error) {
    console.log(error)
  }
}

const putSchedule = async (scheduleData) => {
  const url = `http://35.222.42.133:8000/consulta_horario/${scheduleData.userId}`
  try {
    const data = await axios.put(url, scheduleData)

    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getSchedule, putSchedule }
