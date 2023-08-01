import type { User } from '@prisma/client'
import { services } from '../../../service/domain/controllers.ts'
import { raise } from '../../../shared/helpers/errors.ts'
import { user } from '../../../user/domain/controllers.ts'
import {
  deleteTicket,
  newTicket,
  tickets,
  updateTicket
} from '../../domain/controllers.ts'
import type { TicketDTO } from '../../types/core/types.ts'
import { findTicketById } from '../helpers/helpers.ts'

/**
 * Get all the tickets
 *
 * @returns All the tickets
 */

const getTickets = async () =>
  tickets({
    include: {
      author: true,
      services: true,
      editors: true
    }
  })

/**
 * Get the tickets by radio station
 *
 * @param rsId - the id of the radio station
 * @returns The tickets by radio station
 */

const getTicketsByRs = async (rsId: string) => {
  const service = await services({
    where: { rsId }
  })

  const ticketsByRs = await tickets({
    where: {
      services: {
        some: {
          id: service[0].id
        }
      }
    },
    include: {
      services: {
        include: {
          rs: true
        }
      }
    }
  })

  return ticketsByRs
}

/**
 * Create a new ticket
 *
 * @param args - the object with the data to create a new ticket
 * @returns The new ticket
 */

const createTicket = async (args: TicketDTO) => {
  const currentUser: Awaited<User | null> = await user({
    where: { id: args.author.id }
  })

  if (!currentUser) {
    raise('Error', 'User not found')
  }

  return await newTicket({
    data: {
      ...args,
      author: {
        connect: { id: args.author.id }
      },
      services: {
        connect: args.services.map(service => ({ id: service.id }))
      },
      editors: {
        connect: args.editor?.map(editor => ({ id: editor.id })) ?? []
      }
    }
  })
}

/**
 * Erases a ticket by id
 *
 * @param id - the id of the ticket
 * @throws {Error} - if the ticket is not found
 * @returns The deleted ticket
 */

const erraseTicket = async (id: string) => {
  const ticket = await findTicketById(id)

  return await deleteTicket({ where: { id: ticket.id } })
}

/**
 * Add an editor to a ticket
 *
 * @param args - the arguments to add an editor to a ticket
 * @param args.id - the id of the ticket
 * @param args.editor.id - the id of the editor
 *
 * @throws {Error} - if the ticket is not found
 * @returns The ticket with the new editor
 */

const addEditor = async (args: { id: string; editor: { id: string } }) => {
  const { id } = args
  const ticket = await findTicketById(id)

  return await updateTicket({
    where: { id: ticket.id },
    data: {
      editors: {
        connect: { id: args.editor.id }
      }
    }
  })
}

/**
 * Remove an editor from a ticket
 *
 * @param args - the arguments to add an editor to a ticket
 * @param args.id - the id of the ticket
 * @param args.editor.id - the id of the editor
 *
 * @throws {Error} - if the ticket is not found
 * @returns The ticket with the new editor
 */

const removeEditor = async (args: { id: string; editor: { id: string } }) => {
  const { id } = args
  const ticket = await findTicketById(id)

  return await updateTicket({
    where: { id: ticket.id },
    data: {
      editors: {
        disconnect: { id: args.editor.id }
      }
    }
  })
}

/**
 * Edit a ticket
 *
 * @param args - the arguments to add an editor to a ticket
 * @param args.id - the id of the ticket
 * * Partial<TicketDTO> - the data to update the ticket
 *
 * @throws {Error} - if the ticket is not found
 * @returns The ticket with the new data
 */

const editTicket = async (args: { id: string } & Partial<TicketDTO>) => {
  const { id } = args
  const ticket = await findTicketById(id)

  return await updateTicket({
    where: { id: ticket.id },
    data: {
      ...args,
      services: {
        connect: args.services?.map(service => ({ id: service.id })) ?? []
      },
      editors: {
        connect: args.editor?.map(editor => ({ id: editor.id })) ?? []
      },
      author: {
        connect: { id: args.author?.id ?? ticket.authorId }
      }
    }
  })
}

/**
 * Close a ticket
 *
 * @param id - the id of the ticket
 *
 * @throws {Error} - if the ticket is not found
 * @returns The ticket with the new data
 */

const closeTicket = async (id: string) => {
  const ticket = await findTicketById(id)

  const timeToClose = Math.abs(Date.now() - ticket.createdAt.getTime())
  const timeToCloseInDays = Math.ceil(timeToClose / (1000 * 60 * 60 * 24))

  return await updateTicket({
    where: { id: ticket.id },
    data: {
      status: 'CLOSED',
      closedAt: new Date(),
      timeToClose: timeToCloseInDays
    }
  })
}

export {
  addEditor,
  closeTicket,
  createTicket,
  editTicket,
  erraseTicket,
  getTickets,
  getTicketsByRs,
  removeEditor
}

