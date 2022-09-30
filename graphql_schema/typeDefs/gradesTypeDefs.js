const { gql } = require('apollo-server-express')

const gradesTypeDefs = gql`
    # TYPES
    type User {
        user : String!
    }
    # Queries

    # Mutations
`
module.exports = { gradesTypeDefs }
