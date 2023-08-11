import gql from 'graphql-tag'

const querys = gql`
  type Query {
    tickets: [Ticket!]!
    ticketsByRs(input: FindTicketByRs): [Ticket!]!
  }
`

export default querys
