import { createTicket, erraseTicket } from '../../../application/useCases/index.ts'

export const Mutation = {
  createTicket: async (_, args) => createTicket(args),
  deleteTicket: async (_, args) => erraseTicket(args)
}

export default Mutation
