const axios = require("axios");
const fetch = require("node-fetch");

// import axios from "axios";

// Manage REST communication with microservice

const getSchedule = async (userId) => {
  // const url = `http://127.0.0.1:8000/consulta_horario/${userId}`;
  const url = `http://tusia-consultahorario-ms-service.default.svc.cluster.local:8000/consulta_horario/${userId}`;
  return await fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("data json", data);
      return data;
    })
    .catch((error) => console.log(error));

};

const putSchedule = async (scheduleData) => {
  const url = `http://tusia-consultahorario-ms-service.default.svc.cluster.local:8000/consulta_horario/${scheduleData.userId}`;
  // const url = `http://127.0.0.1:8000/consulta_horario/${scheduleData.userId}`;
  try {
    const data = await axios.put(url, scheduleData);
    console.log("data", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getSchedule, putSchedule };
