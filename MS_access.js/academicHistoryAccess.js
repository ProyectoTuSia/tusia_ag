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
const updateAverages =async (id,averages) => {
    const url =`http://35.224.138.162:8080/api/averages/${id}`
    const resp= await requestPromiseNative({uri:url, method:'PUT', body:{
        PAPA:averages.PAPA,
        PA:averages.PA,
        PAPPI:averages.PAPPI
    },
    json:true})
    return resp.message
}
const updateCreditsTaken =async (id,creditsTaken) => {
    const url =`http://35.224.138.162:8080/api/creditsTaken/${id}`
    const resp= await requestPromiseNative({uri:url, method:'PUT', body:{
        fundamentacion_obligatoria_taken:creditsTaken.fundamentacion_obligatoria_taken,
        fundamentacion_optativa_taken:creditsTaken.fundamentacion_optativa_taken,
        disciplinar_obligatoria_taken:creditsTaken.disciplinar_obligatoria_taken,
        disciplinar_optativa_taken:creditsTaken.disciplinar_optativa_taken,
        libre_eleccion_taken:creditsTaken.libre_eleccion_taken,
        nivelacion_taken:creditsTaken.nivelacion_taken,
        trabajo_de_grado_taken:creditsTaken.trabajo_de_grado_taken,
        total_taken:creditsTaken.total_taken,
        fundamentacion_obligatoria_approved:creditsTaken.fundamentacion_obligatoria_approved,
        fundamentacion_optativa_approved:creditsTaken.fundamentacion_optativa_approved,
        disciplinar_obligatoria_approved:creditsTaken.disciplinar_obligatoria_approved,
        disciplinar_optativa_approved:creditsTaken.disciplinar_optativa_approved,
        libre_eleccion_approved:creditsTaken.libre_eleccion_approved,
        nivelacion_approved:creditsTaken.nivelacion_approved,
        trabajo_de_grado_approved:creditsTaken.trabajo_de_grado_approved,
        total_approved:creditsTaken.total_approved,
    },
    json:true})
    return resp.message
}
const newStudentSubjects =async (id,studentSubject) => {
    const url =`http://35.224.138.162:8080/api/studentSubjects/${id}`
    const resp= await requestPromiseNative({uri:url, method:'POST', body:{
        subject_code:studentSubject.subject_code,
        tipology:studentSubject.tipology,
        period:studentSubject.period,
        grade:studentSubject.grade,
        outcome:studentSubject.outcome
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
    cancelCreditsNoLoss,
    updateAverages,
    updateCreditsTaken,
    newStudentSubjects
}