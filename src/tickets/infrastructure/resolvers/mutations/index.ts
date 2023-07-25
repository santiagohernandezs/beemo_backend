import {
  addEditor,
  closeTicket,
  createTicket,
  editTicket,
  erraseTicket
} from '../../../application/useCases/index.ts'
import type {
  CloseTicketInput,
  CreateTicketInput,
  DeleteTicketInput,
  UpdateEditorInput,
  UpdateTicketInput
} from '../../../types/graphql/types.ts'

export const Mutation = {
  createTicket: async (_: unknown, args: CreateTicketInput) => createTicket(args.input),
  deleteTicket: async (_: unknown, args: DeleteTicketInput) =>
    erraseTicket(args.input.id),
  addEditor: async (_: unknown, args: UpdateEditorInput) => addEditor(args.input),
  closeTicket: async (_: unknown, args: CloseTicketInput) => closeTicket(args.input.id),
  updateTicket: async (_: unknown, args: UpdateTicketInput) => editTicket(args.input)
}

export default Mutation
