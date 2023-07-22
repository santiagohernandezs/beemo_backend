import { getClientById, getClients } from '../../../application/useCases/index.ts'
import type { FindClientById } from '../../../types/core/types.ts'

const Query = {
  clients: async () => await getClients(),
  clientById: async (_: unknown, args: FindClientById) =>
    await getClientById(args.input.id)
}

export default Query
