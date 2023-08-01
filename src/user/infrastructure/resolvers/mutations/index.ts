import { createUser, loginUser } from '../../../application/useCases/index.ts'
import type { CreateUserInput, LoginUserInput } from '../../../types/core/types.ts'

const Mutation = {
  createUser: async (_: unknown, args: CreateUserInput) => createUser(args.input),
  loginUser: async (_: unknown, args: LoginUserInput) => loginUser(args.input)
}

export default Mutation
