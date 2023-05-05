import { getUsers } from '../../../application/useCases/createUser.ts'

const Query = {
  users: async () => await getUsers()
}

export default Query
