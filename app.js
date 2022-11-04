const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const printRequestInfo = require('./middleware/printRequestInfo.js')
const cors = require('cors')
const https = require('https')
const fs = require('fs')

const typeDefs = require('./graphql_schema/typeDefs/typeDefs')
const resolvers = require('./graphql_schema/resolvers/resolvers')

const app = express()
const server = new ApolloServer({ typeDefs, resolvers })

// Middlewares
app.use(printRequestInfo)
app.use('/graphql', cors())

// Configuración del servidor https, puerto 443
const httpsServer = https.createServer({
  cert: fs.readFileSync('./certificates/server.crt'),
  key: fs.readFileSync('./certificates/key.pem')
}, app)

// await new Promise((resolve) => httpsServer.listen({ port: 443 }, resolve))

server.start().then(async (resolve) => {
  server.applyMiddleware({ app, path: '/' })
  await httpsServer.listen({ port: 443 }, () =>
    console.log('Gateway API running at port: 443')
  )
})
