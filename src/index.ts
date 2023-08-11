import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { applyMiddleware } from 'graphql-middleware'
import jwt from 'jsonwebtoken'

import appMiddlewares from '@graphql/middlewares/middlewares'
import appPlugins from '@graphql/plugins/plugins'
import resolvers from '@graphql/resolvers/resolvers'
import typeDefs from '@graphql/typedefs/typedefs'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const schemaWithMiddleware = applyMiddleware(schema, ...appMiddlewares)

const server = new ApolloServer({
  schema: schemaWithMiddleware,
  plugins: [...appPlugins]
})

const handler = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }) => {
      const token = req.headers.authorization || ''

      const currentUser = jwt.decode(token)

      return { token, currentUser }
    }
  })
  console.info(`Server ready at ${url}🚀`)
}

handler()
