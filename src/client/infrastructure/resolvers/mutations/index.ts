import { createClient, deleteClientById } from '../../../application/useCases/index.ts'
import type { CreateClientInput, FindClientById } from '../../../types/core/types.ts'

const Mutation = {
  createClient: async (_: unknown, args: CreateClientInput) => createClient(args.input),
  deleteClient: async (_: unknown, args: FindClientById) => deleteClientById(args.input)
}

export default Mutation
