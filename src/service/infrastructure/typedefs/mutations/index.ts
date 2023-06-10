import gql from 'graphql-tag'
import inputs from '../inputs/index.ts'

const mutations = gql`
  ${inputs}

  type Mutation {
    createService(input: CreateServiceInput): Service!
  }
`

export default mutations
