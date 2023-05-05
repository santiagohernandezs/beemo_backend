import { createUser } from '../../../application/useCases/createUser.ts'

const Mutation = {
  createUser: async (_: unknown, args) => createUser(args)
}

export default Mutation
