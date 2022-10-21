const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const printRequestInfo = require('./middleware/printRequestInfo.js')
const typeDefs = require('./graphql_schema/typeDefs/typeDefs')
const resolvers = require('./graphql_schema/resolvers/resolvers')
const app = express()
const server = new ApolloServer({ typeDefs, resolvers })
const cors = require('cors')
// Routes

// Configuración del servidor, puerto 3080
app.set('port', 3080)
// Middlewares
app.use(printRequestInfo)
app.use(cors())

server.start().then(res => {
  server.applyMiddleware({ app, path: '/' })
  app.listen({ port: 3001 }, () =>
    console.log('Gateway API running at port: 3001')
  )
})
