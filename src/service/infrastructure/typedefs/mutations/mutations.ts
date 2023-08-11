import gql from 'graphql-tag'
import inputs from '../inputs/inputs'

const mutations = gql`
  ${inputs}

  type Mutation {
    createService(input: CreateServiceInput): Service!
  }
`

export default mutations
