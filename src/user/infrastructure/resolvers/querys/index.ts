import { getUserById, getUsers } from '../../../application/useCases/index.ts'
import type { FindUserById } from '../../../types/core/types.ts'

const Query = {
  users: async () => await getUsers(),
  userById: async (_: unknown, args: FindUserById) => await getUserById(args.input.id)
}

export default Query
