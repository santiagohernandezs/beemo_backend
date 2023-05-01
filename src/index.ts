import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import gql from 'graphql-tag'

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    active: Boolean!
  }

  type Query {
    hello: String!
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello World!',
    users: () => []
  },
  Mutation: {
    createUser: () => ({
      id: '1',
      name: 'John',
      email: 'j@prisma.io'
    })
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
})

console.log(`Server ready at ${url}🚀`)
