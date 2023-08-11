import mutations from './mutations/index'
import querys from './querys/index'

const resolvers = {
  Query: querys,
  Mutation: mutations
}

export default resolvers
