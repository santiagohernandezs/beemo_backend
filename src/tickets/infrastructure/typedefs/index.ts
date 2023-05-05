import gql from 'graphql-tag'

const typeDefs = gql`
  enum failureType {
    Electrical
    Frequency
    Hardware
    Software
  }

  enum severityType {
    Critical
    Major
    Minor
  }

  type Ticket {
    id: String!
    title: String!
    content: String!
    type: failureType!
    severity: severityType!
    startDate: String!
    endDate: String!
    services: Service!
    author: [User]!
    createdAt: String!
    updatedAt: String!
  }
`

export default typeDefs
