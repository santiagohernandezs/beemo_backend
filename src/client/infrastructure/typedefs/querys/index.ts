import gql from 'graphql-tag'

const querys = gql`
  type Query {
    clients: [Client]
    clientById(input: FindClientById!): Client
  }
`

export default querys
