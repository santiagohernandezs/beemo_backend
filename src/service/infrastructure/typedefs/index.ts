import gql from 'graphql-tag'
// import inputs from './inputs/index.ts'
// import mutations from './mutations/index.ts'
// import querys from './querys/index.ts'

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

  type Service {
    id: String!
    name: String!
    type: serviceType!
    code: String!
    capacity: Int!
    scale: capacityScaleType!
    rs: String!
    owner: String!
    createdAt: String!
    updatedAt: String!
    tickets: [Ticket!]
  }
`

export default typeDefs
