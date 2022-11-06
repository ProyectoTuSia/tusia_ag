const { gql } = require('apollo-server-express');

const externalCoursesTypeDefs = gql`
  # TYPES
  type Course {
    id: String!
    creditos: Int!
    tipologia: String!
    sede: String!
    nivelestudio: String!
    facultad : String!
    descripcion : String!
    prerequisitos: String!

  }
  # Queries
    type Query {
        in_getExternalCourse : [Course]
    }
`

module.exports = { externalCoursesTypeDefs }

