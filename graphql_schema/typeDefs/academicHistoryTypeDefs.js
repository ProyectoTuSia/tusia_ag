const { gql } = require('apollo-server-express')

const academicHistoryTypeDefs = gql`
    # TYPES
    type User {
        user : String!
    }

    # Queries
    type Query {
        getAllUsers : [User!]!
    }
    # Mutations
`
module.exports = { academicHistoryTypeDefs }
