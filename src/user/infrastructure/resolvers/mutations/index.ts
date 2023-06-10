import { createUser } from '../../../application/useCases/index.ts'

const Mutation = {
  createUser: async (_: unknown, args) => createUser(args)
}

export default Mutation
