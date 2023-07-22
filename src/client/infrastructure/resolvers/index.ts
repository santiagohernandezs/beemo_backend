import clientMutation from './mutations/index.ts'
import clientQuery from './querys/index.ts'

const resolvers = {
  Query: clientQuery,
  Mutation: clientMutation
}

export default resolvers
