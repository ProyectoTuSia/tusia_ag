const { gql } = require('apollo-server-express')

const authenticationTypeDefs = gql`
    # TYPES
    type User {
        user : String!
    }
    # Queries

    # Mutations
`
module.exports = { authenticationTypeDefs }
