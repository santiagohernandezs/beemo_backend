import type { GenericInput } from '../../../shared/types/core/types'

type ClientData = {
  name: string
  lastname: string
  email: string
  phone: string
  address: string
}

type PartialClientData = Partial<ClientData>
type CreateClientInput = GenericInput<ClientData>
type UpdateClientInput = GenericInput<PartialClientData>
type FindClientById = GenericInput<{ id: string }>

export type {
  ClientData,
  PartialClientData,
  CreateClientInput,
  FindClientById,
  UpdateClientInput
}
