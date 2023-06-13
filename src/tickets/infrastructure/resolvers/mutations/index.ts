import {
  addAuthor,
  createTicket,
  erraseTicket,
  removeAuthor
} from '../../../application/useCases/index.ts'

export const Mutation = {
  createTicket: async (_, args) => createTicket(args),
  deleteTicket: async (_, args) => erraseTicket(args),
  addAuthor: async (_, args) => addAuthor(args),
  removeAuthor: async (_, args) => removeAuthor(args)
}

export default Mutation
