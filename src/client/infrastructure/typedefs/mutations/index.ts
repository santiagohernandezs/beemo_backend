import gql from 'graphql-tag'
import inputs from '../inputs/index.ts'

const mutations = gql`
  ${inputs}

  type Mutation {
    createClient(input: CreateClientInput!): Client
    deleteClientById(input: FindClientById!): Client
    deleteClientById(input: FindClientById!): Client
  }
`

export default mutations
