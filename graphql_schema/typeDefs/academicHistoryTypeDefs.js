const { gql } = require('apollo-server-express')

const academicHistoryTypeDefs = gql`
    # TYPES
    type aH_Averages {
        id_story: Int
        PAPA : Float
        PA: Float
        PAPPI: Float
    }
    type aH_careerCredits{
        code: Int
        fundamentacion_obligatoria: Int
        fundamentacion_optativa: Int
        disciplinar_obligatoria: Int
        disciplinar_optativa: Int
        libre_eleccion: Int
        nivelacion: Int
        trabajo_de_grado:Int
        total: Int
    }
    type aH_creditHistory{
        id_story: Int
        fundamentacion_optativa_approved: Int
        fundamentacion_obligatoria_approved: Int
        disciplinar_optativa_approved: Int
        disciplinar_obligatoria_approved: Int
        nivelacion_approved: Int
        trabajo_de_grado_approved: Int
        libre_eleccion_approved: Int
        total_approved: Int
        fundamentacion_optativa_pending: Int
        fundamentacion_obligatoria_pending: Int
        disciplinar_optativa_pending: Int
        disciplinar_obligatoria_pending: Int
        nivelacion_pending: Int
        trabajo_de_grado_pending: Int
        libre_eleccion_pending: Int
        total_pending: Int
        fundamentacion_optativa_signed: Int
        fundamentacion_obligatoria_signed: Int
        disciplinar_optativa_signed: Int
        disciplinar_obligatoria_signed: Int
        nivelacion_signed: Int
        trabajo_de_grado_signed: Int
        libre_eleccion_signed: Int
        total_signed: Int
        fundamentacion_optativa_taken: Int
        fundamentacion_obligatoria_taken: Int
        disciplinar_optativa_taken: Int
        disciplinar_obligatoria_taken: Int
        nivelacion_taken: Int
        trabajo_de_grado_taken: Int
        libre_eleccion_taken: Int
        total_taken: Int
    }
    type aH_creditSummary{
        id_story: Int
        surplus_credits: Int
        canceled_credits: Int
        completion_percentage: Float
        aditional_credits: Int
        credit_quota: Int
        available_credits: Int
    }
    type aH_academicStory{
        id: Int
        username: String
        faculty: String
        career_code: Int
        career_name: String
        state: String
    }
    type aH_studentSubject{
        subject_code: Int
        id_story: Int
        tipology: String
        period: String
        grade: Float
        outcome: String
    }
    input aH_creditsSignedInput{
        fundamentacion_obligatoria_signed:Int
        fundamentacion_optativa_signed:Int
        disciplinar_obligatoria_signed:Int
        disciplinar_optativa_signed:Int
        libre_eleccion_signed:Int
        nivelacion_signed:Int
        trabajo_de_grado_signed:Int
        total_signed:Int
    }
    input aH_creditsInput{
        fundamentacion_obligatoria: Int
        fundamentacion_optativa: Int
        disciplinar_obligatoria: Int
        disciplinar_optativa: Int
        libre_eleccion: Int
        nivelacion: Int
        trabajo_de_grado: Int
        total: Int
    }
    input aH_averagesInput {
        PAPA : Float
        PA: Float
        PAPPI: Float
    }
    input aH_creditsTakenInput{
        fundamentacion_obligatoria_taken:Int
        fundamentacion_optativa_taken:Int
        disciplinar_obligatoria_taken:Int
        disciplinar_optativa_taken:Int
        libre_eleccion_taken:Int
        nivelacion_taken:Int
        trabajo_de_grado_taken:Int
        total_taken:Int
        fundamentacion_obligatoria_approved:Int
        fundamentacion_optativa_approved:Int
        disciplinar_obligatoria_approved:Int
        disciplinar_optativa_approved:Int
        libre_eleccion_approved:Int
        nivelacion_approved:Int
        trabajo_de_grado_approved:Int
        total_approved:Int
    }
    input aH_studentSubjectInput{
        subject_code:Int
        tipology:String
        period:String
        grade:Float
        outcome:String
    }

    # Queries
    type Query {
        aH_getAverages(id: Int) : aH_Averages
        aH_getCareerCredits(code: Int) : aH_careerCredits
        aH_getCreditHistory(id:Int) : aH_creditHistory
        aH_getCreditSummary(id: Int):aH_creditSummary
        aH_getAcademicStory(id:Int): aH_academicStory
        aH_getStudentSubjects(id: Int): [aH_studentSubject]
        aH_getStoriesByUser(user:String):[aH_academicStory]
    }
    # Mutations
    type Mutation {
        aH_updateCreditsSigned(id:Int, creditsSigned: aH_creditsSignedInput): String
        aH_cancelCreditsLoss(id:Int, credits: aH_creditsInput):String
        aH_cancelCreditsNoLoss(id:Int, credits: aH_creditsInput):String
        aH_updateAverages(id:Int, averages: aH_averagesInput):String
        aH_updateCreditsTaken(id:Int, creditsTaken: aH_creditsTakenInput):String
        aH_newStudentSubjects(id:Int, studentSubject: aH_studentSubjectInput):String
    }
`
module.exports = { academicHistoryTypeDefs }
