import type { Ticket, User } from '@prisma/client'
import { userById } from '../../../user/domain/controllers.ts'
import {
  deleteAuthor,
  deleteTicket,
  newAuthor,
  newTicket,
  ticketById,
  tickets
} from '../../domain/controllers.ts'

const getTickets = async () => tickets()

const createTicket = async args => {
  const user: User | null = await userById(args.input.authors.at(0).id)

  if (!user) {
    throw new Error('User not found')
  }

  return await newTicket(args)
}

const erraseTicket = async args => {
  const { id } = args.input
  const ticket: Ticket | null = await ticketById(id)

  if (!ticket) {
    throw new Error('Ticket not found')
  }

  return await deleteTicket(id)
}

const addAuthor = async args => {
  const { id } = args.input
  const ticket: Ticket | null = await ticketById(id)

  if (!ticket) {
    throw new Error('Ticket not found')
  }

  return await newAuthor(args)
}

const removeAuthor = async args => {
  const { id } = args.input
  const ticket: Ticket | null = await ticketById(id)

  if (!ticket) {
    throw new Error('Ticket not found')
  }

  return await deleteAuthor(args)
}

export { addAuthor, createTicket, erraseTicket, getTickets, removeAuthor }
