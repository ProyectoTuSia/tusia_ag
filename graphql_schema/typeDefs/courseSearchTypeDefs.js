const { gql } = require('apollo-server-express')

const courseSearchTypeDefs = gql`
    # TYPES
    type User {
        user : String!
    }
    # Queries

    # Mutations
`
module.exports = { courseSearchTypeDefs }
