const { gql } = require('apollo-server-express')

const academicHistoryTypeDefs = gql`
    # TYPES
    type Averages {
        id_story: Int
        PAPA : Float
        PA: Float
        PAPPI: Float
    }
    type careerCredits{
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
    type creditHistory{
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
    type creditSummary{
        id_story: Int
        surplus_credits: Int
        canceled_credits: Int
        completion_percentage: Float
        aditional_credits: Int
        credit_quota: Int
        available_credits: Int
    }
    type academicStory{
        id: Int
        username: String
        faculty: String
        career_code: Int
        career_name: String
        state: String
    }
    type studentSubject{
        subject_code: Int
        id_story: Int
        tipology: String
        period: String
        grade: Float
        outcome: String
    }
    input creditsSignedInput{
        fundamentacion_obligatoria_signed:Int
        fundamentacion_optativa_signed:Int
        disciplinar_obligatoria_signed:Int
        disciplinar_optativa_signed:Int
        libre_eleccion_signed:Int
        nivelacion_signed:Int
        trabajo_de_grado_signed:Int
        total_signed:Int
    }
    input creditsInput{
        fundamentacion_obligatoria: Int
        fundamentacion_optativa: Int
        disciplinar_obligatoria: Int
        disciplinar_optativa: Int
        libre_eleccion: Int
        nivelacion: Int
        trabajo_de_grado: Int
        total: Int
    }
    input averagesInput {
        PAPA : Float
        PA: Float
        PAPPI: Float
    }
    input creditsTakenInput{
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
    input studentSubjectInput{
        subject_code:Int
        tipology:String
        period:String
        grade:Float
        outcome:String
    }

    # Queries
    type Query {
        getAverages(id: Int) : Averages
        getCareerCredits(code: Int) : careerCredits
        getCreditHistory(id:Int) : creditHistory
        getCreditSummary(id: Int):creditSummary
        getAcademicStory(id:Int): academicStory
        getStudentSubjects(id: Int): [studentSubject]
    }
    # Mutations
    type Mutation {
        updateCreditsSigned(id:Int, creditsSigned: creditsSignedInput): String
        cancelCreditsLoss(id:Int, credits: creditsInput):String
        cancelCreditsNoLoss(id:Int, credits: creditsInput):String
        updateAverages(id:Int, averages:averagesInput):String
        updateCreditsTaken(id:Int, creditsTaken:creditsTakenInput):String
        newStudentSubjects(id:Int, studentSubject:studentSubjectInput):String
    }
`
module.exports = { academicHistoryTypeDefs }
