import gql from 'graphql-tag'
import inputs from './inputs'
import mutations from './mutations'
import querys from './queries'

const typeDefs = gql`
  enum failureType {
    Electrical
    Frequency
    Hardware
    Software
  }

  enum Status {
    OPEN
    IN_PROGRESS
    RESOLVED
    CLOSED
  }

  enum severityType {
    Critical
    Major
    Minor
  }

  enum Tag {
    AP
    PTP
    CP
    Electrical
    Frequency
    Hardware
    Software
    Critical
    Major
    Minor
    OPEN
    IN_PROGRESS
    RESOLVED
    CLOSED
    IT
    SUPPORT
    NOC
    HR
    FINANCE
    MARKETING
    SALES
    CUSTOMER_SERVICE
    MBPS
    GBPS
    TBPS
  }

  ${inputs}
  type Ticket {
    id: String!
    title: String!
    content: String!
    type: failureType!
    severity: severityType!
    services: [Service!]
    author: User!
    tags: [Tag!]
    editors: [User!]
    createdAt: String!
    updatedAt: String!
    closedAt: String!
    timeToClose: String!
  }
  ${querys}
  ${mutations}
`

export default typeDefs
