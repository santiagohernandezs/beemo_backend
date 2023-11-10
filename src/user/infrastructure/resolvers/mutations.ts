import { createUser, loginUser, removeUser } from '@user/application/useCases'
import type {
  CreateUserInput,
  LoginUserInput,
  RemoveUserInput
} from '@user/types/core/types'

const Mutation = {
  createUser: async (_: unknown, args: CreateUserInput) => createUser(args.input),
  loginUser: async (_: unknown, args: LoginUserInput) => loginUser(args.input),
  removeUser: async (_: unknown, args: RemoveUserInput) => removeUser(args.input.id)
}

export default Mutation
