import { getClientById, getClients } from '../../../application/useCases/index.ts'
import type { FindUserById } from '../../../types/core/types.ts'

const Query = {
  clients: async () => await getClients(),
  clientById: async (_: unknown, args: FindUserById) => await getClientById(args.input.id)
}

export default Query
