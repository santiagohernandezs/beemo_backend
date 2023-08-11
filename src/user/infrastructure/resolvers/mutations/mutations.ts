import { createUser, loginUser } from '@user/application/useCases/useCases'
import type { CreateUserInput, LoginUserInput } from '@user/types/core/types'

const Mutation = {
  createUser: async (_: unknown, args: CreateUserInput) => createUser(args.input),
  loginUser: async (_: unknown, args: LoginUserInput) => loginUser(args.input)
}

export default Mutation
