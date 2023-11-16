import gql from 'graphql-tag'

const mutations = gql`
  # Definición del tipo Mutation.
  type Mutation {
    "Creación de un ticket."
    createTicket(input: CreateTicketInput!): Ticket!
    "Eliminación de un ticket."
    deleteTicket(input: DeleteTicketInput!): Ticket!
    "Adición de un editor a un ticket."
    addEditor(input: AddEditorInput!): Ticket!
    "Cierre de un ticket."
    closeTicket(input: CloseTicketInput!): Ticket!
    "Actualización de un ticket."
    updateTicket(input: UpdateTicketInput!): Ticket!
  }
`

export default mutations
