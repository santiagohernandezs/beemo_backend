import type { GenericInput } from '@shared/types/core/types'
import type { Ticket, TicketDTO } from '@tickets/types/core/types'

type TicketId = Pick<Ticket, 'id'>

type CreateTicketInput = GenericInput<TicketDTO>
type DeleteTicketInput = GenericInput<TicketId>
type FindTicketById = GenericInput<TicketId>
type UpdateEditorInput = GenericInput<TicketId & { editor: { id: string } }>
type CloseTicketInput = GenericInput<TicketId>
type UpdateTicketInput = GenericInput<TicketId & { data: Partial<TicketDTO> }>
type AddCommentInput = GenericInput<TicketId & { comment: string; user: string }>

type FindTicketByRs = GenericInput<{ id: string }>

export type {
  AddCommentInput,
  CloseTicketInput,
  CreateTicketInput,
  DeleteTicketInput,
  FindTicketById,
  FindTicketByRs,
  UpdateEditorInput,
  UpdateTicketInput
}

