import userMutation from './mutations'
import userQuery from './queries'

const resolvers = {
  Query: userQuery,
  Mutation: userMutation
}

export default resolvers
