import {
  addEditor,
  closeTicket,
  createTicket,
  editTicket,
  erraseTicket
} from '@tickets/application/useCases/useCases'
import type {
  CloseTicketInput,
  CreateTicketInput,
  DeleteTicketInput,
  UpdateEditorInput,
  UpdateTicketInput
} from '@tickets/types/graphql/types'

export const Mutation = {
  createTicket: async (_: unknown, args: CreateTicketInput) =>
    await createTicket(args.input),
  deleteTicket: async (_: unknown, args: DeleteTicketInput) =>
    await erraseTicket(args.input.id),
  addEditor: async (_: unknown, args: UpdateEditorInput) => await addEditor(args.input),
  closeTicket: async (_: unknown, args: CloseTicketInput) =>
    await closeTicket(args.input.id),
  updateTicket: async (_: unknown, args: UpdateTicketInput) =>
    await editTicket(args.input)
}

export default Mutation
