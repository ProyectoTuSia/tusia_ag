const { response } = require("express")
const requestPromiseNative = require("request-promise-native")


// Manage REST communication with microservice
const getAverages =async (id) => {
    const url =`http://35.224.138.162:8080/api/averages/${id}`
    const resp= await requestPromiseNative({uri:url,json:true})
    return resp[0]
}

const getCareerCredits =async (code) => {
    const url =`http://35.224.138.162:8080/api/careerCredits/${code}`
    const resp= await requestPromiseNative({uri:url,json:true})
    return resp[0]
}

const getCreditHistory =async (id) => {
    const url =`http://35.224.138.162:8080/api/creditHistory/${id}`
    const resp= await requestPromiseNative({uri:url,json:true})
    return resp[0]
}

const getCreditSummary =async (id) => {
    const url =`http://35.224.138.162:8080/api/creditSummary/${id}`
    const resp= await requestPromiseNative({uri:url,json:true})
    return resp[0]
}

const getAcademicStory =async (id) => {
    const url =`http://35.224.138.162:8080/api/academicStory/${id}`
    const resp= await requestPromiseNative({uri:url,json:true})
    return resp[0]
}
const getStudentSubjects =async (id) => {
    const url =`http://35.224.138.162:8080/api/studentSubjects/${id}`
    const resp= await requestPromiseNative({uri:url,json:true})
    return resp
}
const updateCreditsSigned =async (id,creditsSigned) => {
    const url =`http://35.224.138.162:8080/api/creditsSigned/${id}`
    const resp= await requestPromiseNative({uri:url, method:'PUT', body:{
        fundamentacion_obligatoria_signed:creditsSigned.fundamentacion_obligatoria_signed,
        fundamentacion_optativa_signed:creditsSigned.fundamentacion_optativa_signed,
        disciplinar_obligatoria_signed:creditsSigned.disciplinar_obligatoria_signed,
        disciplinar_optativa_signed:creditsSigned.disciplinar_optativa_signed,
        libre_eleccion_signed:creditsSigned.libre_eleccion_signed,
        nivelacion_signed:creditsSigned.nivelacion_signed,
        trabajo_de_grado_signed:creditsSigned.trabajo_de_grado_signed,
        total_signed:creditsSigned.total_signed
    },
    json:true})
    return resp.message
}
const cancelCreditsLoss =async (id,credits) => {
    const url =`http://35.224.138.162:8080/api/cancelCredits/${id}`
    const resp= await requestPromiseNative({uri:url, method:'PUT', body:{
        fundamentacion_obligatoria:credits.fundamentacion_obligatoria,
        fundamentacion_optativa:credits.fundamentacion_optativa,
        disciplinar_obligatoria:credits.disciplinar_obligatoria,
        disciplinar_optativa:credits.disciplinar_optativa,
        libre_eleccion:credits.libre_eleccion,
        nivelacion:credits.nivelacion,
        trabajo_de_grado:credits.trabajo_de_grado,
        total:credits.total
    },
    json:true})
    return resp.message
}
const cancelCreditsNoLoss =async (id,credits) => {
    const url =`http://35.224.138.162:8080/api/cancelCredits/noLoss/${id}`
    const resp= await requestPromiseNative({uri:url, method:'PUT', body:{
        fundamentacion_obligatoria:credits.fundamentacion_obligatoria,
        fundamentacion_optativa:credits.fundamentacion_optativa,
        disciplinar_obligatoria:credits.disciplinar_obligatoria,
        disciplinar_optativa:credits.disciplinar_optativa,
        libre_eleccion:credits.libre_eleccion,
        nivelacion:credits.nivelacion,
        trabajo_de_grado:credits.trabajo_de_grado,
        total:credits.total
    },
    json:true})
    return resp.message
}
module.exports = { 
    getAverages, 
    getCareerCredits,
    getCreditHistory,
    getCreditSummary,
    getAcademicStory,
    getStudentSubjects,
    updateCreditsSigned,
    cancelCreditsLoss,
    cancelCreditsNoLoss
}