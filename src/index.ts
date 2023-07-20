import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import resolvers from './graphql/resolvers/index.ts'
import typeDefs from './graphql/typedefs/index.ts'

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
})

console.info(`Server ready at ${url}🚀`)
