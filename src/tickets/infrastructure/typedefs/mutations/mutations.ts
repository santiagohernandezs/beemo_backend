import gql from 'graphql-tag'
import inputs from '../inputs/inputs'

const mutations = gql`
  ${inputs}

  type Mutation {
    createTicket(input: CreateTicketInput!): Ticket!
    deleteTicket(input: DeleteTicketInput!): Ticket!
    addEditor(input: AddEditorInput!): Ticket!
    closeTicket(input: CloseTicketInput!): Ticket!
    updateTicket(input: UpdateTicketInput!): Ticket!
  }
`

export default mutations
