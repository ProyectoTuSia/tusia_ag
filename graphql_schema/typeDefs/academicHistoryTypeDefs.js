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

    # Queries
    type Query {
        getAverages(id: Int) : Averages
        getCareerCredits(code: Int) : careerCredits
    }
    # Mutations
`
module.exports = { academicHistoryTypeDefs }
