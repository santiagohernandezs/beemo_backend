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

const newAuthor = async args => {
  return await prisma.ticket.update({
    where: {
      id: args.input.id
    },
    data: {
      ...args.input,
      authors: {
        connect: args.input.authors.map(author => ({ id: author.id }))
      }
    }
  })
}

const deleteAuthor = async args => {
  return await prisma.ticket.update({
    where: {
      id: args.input.id
    },
    data: {
      ...args.input,
      authors: {
        disconnect: args.input.authors.map(author => ({ id: author.id }))
      }
    }
  })
}

export { deleteAuthor, deleteTicket, newAuthor, newTicket, ticketById, tickets }
