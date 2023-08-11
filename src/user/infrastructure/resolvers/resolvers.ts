import userMutation from './mutations/mutations'
import userQuery from './querys/index'

const resolvers = {
  Query: userQuery,
  Mutation: userMutation
}

export default resolvers
