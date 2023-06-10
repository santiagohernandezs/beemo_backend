import mutations from './mutations/index.ts'
import querys from './querys/index.ts'

const resolvers = {
  Query: querys,
  Mutation: mutations
}

export default resolvers
