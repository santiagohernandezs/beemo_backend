import userMutation from './mutations/index.ts'
import userQuery from './querys/index.ts'

const resolvers = {
  Query: userQuery,
  Mutation: userMutation
}

export default resolvers
