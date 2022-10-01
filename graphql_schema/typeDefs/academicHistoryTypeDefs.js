const { gql } = require('apollo-server-express')

const academicHistoryTypeDefs = gql`
    # TYPES
    type Averages {
        id_story: Int
        PAPA : Float
        PA: Float
        PAPPI: Float
    }

    # Queries
    type Query {
        getAverages(id: Int) : Averages
    }
    # Mutations
`
module.exports = { academicHistoryTypeDefs }
