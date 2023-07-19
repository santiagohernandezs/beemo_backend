import { createUser } from '../../../application/useCases/index.ts'
import type { CreateUserInput } from '../../../types/core/types.ts'

const Mutation = {
  createUser: async (_: unknown, args: CreateUserInput) => createUser(args.input)
}

export default Mutation
