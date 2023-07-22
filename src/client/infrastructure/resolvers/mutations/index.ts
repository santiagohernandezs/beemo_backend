import {
  createClient,
  deleteClientById,
  updateClientById
} from '../../../application/useCases/index.ts'
import type {
  CreateClientInput,
  FindClientById,
  UpdateClientInput
} from '../../../types/core/types.ts'

const Mutation = {
  createClient: async (_: unknown, args: CreateClientInput) => createClient(args.input),
  deleteClientById: async (_: unknown, args: FindClientById) =>
    deleteClientById(args.input),
  updateClientById: async (_: unknown, args: UpdateClientInput) =>
    updateClientById(args.input)
}

export default Mutation
