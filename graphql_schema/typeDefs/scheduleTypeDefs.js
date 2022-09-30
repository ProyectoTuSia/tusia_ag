const { gql } = require('apollo-server-express')

const scheduleTypeDefs = gql`
    # TYPES
    type User {
        user : String!
    }
    # Queries

    # Mutations
`
module.exports = { scheduleTypeDefs }
