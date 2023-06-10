import prisma from '../../db/connection.ts'

const tickets = async () => {
  return await prisma.ticket.findMany({
    include: {
      authors: true,
      services: true
    }
  })
}

const newTicket = async args => {
  return await prisma.ticket.create({
    data: {
      ...args.input,
      authors: {
        connect: args.input.authors.map(author => ({ id: author.id }))
      },
      services: {
        connect: args.input.services.map(service => ({ id: service.id }))
      }
    },
    include: {
      authors: true
    }
  })
}

const ticketById = async id => {
  return await prisma.ticket.findUnique({
    where: {
      id
    }
  })
}

const deleteTicket = async id => {
  return await prisma.ticket.delete({
    where: {
      id
    }
  })
}

export { deleteTicket, newTicket, ticketById, tickets }
