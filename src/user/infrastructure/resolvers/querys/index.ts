import { getUserById, getUsers } from '@user/application/useCases/useCases'
import type { FindUserById } from '@user/types/core/types'

const Query = {
  users: async () => await getUsers(),
  userById: async (_: unknown, args: FindUserById) => await getUserById(args.input.id)
}

export default Query
