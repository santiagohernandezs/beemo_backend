import gql from 'graphql-tag'
import inputs from './inputs/index.ts'
import mutations from './mutations/index.ts'
import querys from './querys/index.ts'

const typedefs = gql`
  ${inputs}
  type Client {
    id: String!
    name: String!
    lastname: String!
    email: String!
    phone: String!
    address: String!
    services: [Service]
    createdAt: String!
    updatedAt: String!
  }
  ${querys}
  ${mutations}
`

export default typedefs
