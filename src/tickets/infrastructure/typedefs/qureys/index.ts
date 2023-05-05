import gql from 'graphql-tag'

const querys = gql`
  type Query {
    tickets: [Ticket!]!
  }
`

export default querys
