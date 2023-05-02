import { createUser } from '../../../application/controllers.ts'

const Mutation = {
  createUser: async (_: unknown, args) => createUser(args)
}

export default Mutation
