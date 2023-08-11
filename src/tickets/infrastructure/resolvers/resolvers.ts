import mutations from './mutations/mutations'
import querys from './queries/queries'

const resolvers = {
  Query: querys,
  Mutation: mutations
}

export default resolvers
