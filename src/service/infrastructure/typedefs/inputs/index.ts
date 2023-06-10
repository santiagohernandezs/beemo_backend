import gql from 'graphql-tag'

const inputs = gql`
  input CreateServiceInput {
    id: String!
    name: String!
    type: serviceType!
    code: String!
    capacity: Int!
    scale: capacityScaleType!
    rs: String!
    owner: String!
  }
`

export default inputs
