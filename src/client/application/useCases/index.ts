import {
  newClient,
  clients,
  client,
  deletedClient,
  updatedClient
} from '../../domain/controllers.ts'
import type { ClientData, PartialClientData } from '../../types/core/types.ts'

const createClient = async (args: ClientData) =>
  newClient({
    data: {
      ...args
    }
  })

const deleteClientById = async (args: { id: string }) =>
  deletedClient({ where: { id: args.id } })

const updateClientById = async (args: { id: string; data: PartialClientData }) =>
  updatedClient({ where: { id: args.id }, data: args.data })

const getClients = async () => clients({})

const getClientById = async (id: string) => client({ where: { id } })

export { createClient, getClients, getClientById, deleteClientById, updateClientById }
