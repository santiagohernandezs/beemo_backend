import gql from 'graphql-tag'
import inputs from './inputs/inputs'
import mutations from './mutations/mutations'
import querys from './queries/queries'

const typeDefs = gql`
  enum serviceType {
    AP
    PTP
    CP
  }
  enum capacityScaleType {
    MBPS
    GBPS
    TBPS
  }

  ${inputs}
  type Service {
    id: String!
    name: String!
    type: serviceType!
    code: String!
    capacity: Int!
    scale: capacityScaleType!
    rs: Rs!
    owner: String!
    createdAt: String!
    updatedAt: String!
    tickets: [Ticket!]
  }
  ${querys}
  ${mutations}
`

export default typeDefs
