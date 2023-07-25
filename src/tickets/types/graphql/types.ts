import type { GenericInput } from '../../../shared/types/core/types'
import type { TicketDTO } from '../core/types'

type CreateTicketInput = GenericInput<TicketDTO>
type DeleteTicketInput = GenericInput<{ id: string }>
type FindTicketById = GenericInput<{ id: string }>
type UpdateEditorInput = GenericInput<{ id: string; editor: { id: string } }>
type CloseTicketInput = GenericInput<{ id: string }>
type UpdateTicketInput = GenericInput<{ id: string; data: Partial<TicketDTO> }>

export type {
  CloseTicketInput,
  CreateTicketInput,
  DeleteTicketInput,
  FindTicketById,
  UpdateEditorInput,
  UpdateTicketInput
}
