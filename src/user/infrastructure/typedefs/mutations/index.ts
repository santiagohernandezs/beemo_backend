import gql from 'graphql-tag'
import inputs from '../inputs/index.ts'

const mutations = gql`
  ${inputs}

  type Mutation {
    createUser(input: CreateUserInput!): User
  }
`

export default mutations
