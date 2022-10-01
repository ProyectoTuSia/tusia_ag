const { response } = require("express")
const requestPromiseNative = require("request-promise-native")


// Manage REST communication with microservice
const getAverages =async (id) => {
    console.log(id)
    const url =`http://35.224.138.162:8080/api/averages/${id}`
    const resp= await requestPromiseNative({uri:url,json:true})
    return resp[0]
}

const getCareerCredits =async (code) => {
    console.log(code)
    const url =`http://35.224.138.162:8080/api/careerCredits/${code}`
    const resp= await requestPromiseNative({uri:url,json:true})
    return resp[0]
}
module.exports = { getAverages, getCareerCredits}