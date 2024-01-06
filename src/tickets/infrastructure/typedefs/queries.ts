import gql from 'graphql-tag'

const querys = gql`
  # Definición del tipo Query.
  type Query {
    "Consulta para obtener todos los tickets."
    tickets: [Ticket!]!
    "Consulta para obtener un ticket por su ID."
    ticketsByRs(input: FindTicketByRs): [Ticket!]!
  }
`

export default querys
