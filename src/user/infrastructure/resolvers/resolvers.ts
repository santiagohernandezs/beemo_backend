import userMutation from './mutations/mutations'
import userQuery from './queries/queries'

const resolvers = {
  Query: userQuery,
  Mutation: userMutation
}

export default resolvers
