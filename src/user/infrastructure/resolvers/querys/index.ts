import { getUserById, getUsers } from '../../../application/useCases/index.ts'

const Query = {
  users: async () => await getUsers(),
  userById: async (_, { id }) => await getUserById(id)
}

export default Query
