import type { GenericInput } from '@shared/types/core/types'
import type { TicketDTO } from '@tickets/types/core/types'

type CreateTicketInput = GenericInput<TicketDTO>
type DeleteTicketInput = GenericInput<{ id: string }>
type FindTicketById = GenericInput<{ id: string }>
type UpdateEditorInput = GenericInput<{ id: string; editor: { id: string } }>
type CloseTicketInput = GenericInput<{ id: string }>
type UpdateTicketInput = GenericInput<{ id: string; data: Partial<TicketDTO> }>

type FindTicketByRs = GenericInput<{ id: string }>

export type {
  CloseTicketInput,
  CreateTicketInput,
  DeleteTicketInput,
  FindTicketById,
  FindTicketByRs,
  UpdateEditorInput,
  UpdateTicketInput
}
