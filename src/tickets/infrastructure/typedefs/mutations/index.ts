import gql from 'graphql-tag'
import inputs from '../inputs/index.ts'

const mutations = gql`
  ${inputs}

  type Mutation {
    createTicket(input: CreateTicketInput!): Ticket!
    deleteTicket(input: DeleteTicketInput!): Ticket!
    addAuthor(input: EditTicketCoAuthorInput!): Ticket!
    removeAuthor(input: EditTicketCoAuthorInput!): Ticket!
  }
`

export default mutations
