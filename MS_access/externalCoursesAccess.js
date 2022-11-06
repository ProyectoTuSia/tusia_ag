const axios = require("axios");
// import axios from "axios";

// Manage REST communication with microservice

const getExternalCourse = async () => {
  const url = `http://35.226.234.39:8000/client/getExternalCourses`;
  try {
    const response = await axios.get(url);
    const externalCourseData = response.data.data;
    console.log(externalCourseData, 'externalCourseData from access');
    return externalCourseData;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getExternalCourse };
