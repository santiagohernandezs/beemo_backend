import type { Client } from '@prisma/client'
import { raise } from '../../../shared/helpers/errors.ts'
import type { ClientData, UpdateData } from '../../types/core/types.ts'
import {
  newClient,
  clients,
  deletedClient,
  updatedClient,
  clientById
} from '../../domain/controllers.ts'

const createClient = async (args: ClientData) =>
  newClient({
    data: {
      ...args
    }
  })

const deleteClientById = async (args: { id: string }) => {
  const { id } = args
  const client: Client | null = await clientById({ where: { id } })

  if (!client) {
    raise('Error', 'Client not found')
  }

  return deletedClient({ where: { id: args.id } })
}

const updateClientById = async (args: UpdateData) => {
  const { id, data } = args
  const client: Client | null = await clientById({ where: { id } })

  if (!client) {
    raise('Error', 'Client not found')
  }

  const hasAtLeastOneDataToUpdate = Object.keys(data).length > 0

  if (!hasAtLeastOneDataToUpdate) {
    raise('Error', 'Data to update not found')
  }

  return updatedClient({ where: { id: args.id }, data: args.data })
}

const getClients = async () => clients({})

const getClientById = async (id: string) => clientById({ where: { id } })

export { createClient, getClients, getClientById, deleteClientById, updateClientById }
