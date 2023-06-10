import gql from 'graphql-tag'
import inputs from './inputs/index.ts'
import mutations from './mutations/index.ts'
import querys from './querys/index.ts'

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

  ${inputs}
  type Ticket {
    id: String!
    title: String!
    content: String!
    type: failureType!
    severity: severityType!
    startDate: String
    endDate: String
    services: [Service!]
    authors: [User!]
    createdAt: String!
    updatedAt: String!
  }
  ${querys}
  ${mutations}
`

export default typeDefs
