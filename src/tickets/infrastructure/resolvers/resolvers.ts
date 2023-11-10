import mutations from './mutations'
import querys from './queries'

const resolvers = {
  Query: querys,
  Mutation: mutations
}

export default resolvers
