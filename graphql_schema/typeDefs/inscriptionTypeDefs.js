const { gql } = require('apollo-server-express')

const inscriptionTypeDefs = gql`
    # TYPES
    type User {
        user : String!
    }
    # Queries

    # Mutations
`
module.exports = { inscriptionTypeDefs }
