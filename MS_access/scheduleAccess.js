const axios = require('axios')
// import axios from "axios";

// Manage REST communication with microservice



const getSchedule = async (userId) =>{
    console.log(`the user is: ${userId}`)
    const url = `http://35.222.215.215:8000/consulta_horario/${userId}`
    try{
        let data = await axios.get(url);
        data = data.json()
        console.log(`the first data is: ${data}`)
        return data

    }catch(error){
        console.log(error)
    }
}

const putSchedule = async (scheduleData)=>{
    const url = `http://35.222.215.215:8000/consulta_horario/${scheduleData.userId}`
    try{
        const data = await axios.put(url,scheduleData);

        console.log(data)
        return data

    }catch(error){
        console.log(error)
    }

}

module.exports = { getSchedule, putSchedule }
