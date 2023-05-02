import { createUser } from '../../../application/controllers.ts'

const Query = {
  users: (_: unknown, args) => createUser(args)
}

export default Query
