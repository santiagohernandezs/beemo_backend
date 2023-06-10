import gql from 'graphql-tag'

const inputs = gql`
  input referenceUserInput {
    id: String
  }

  input referenceServiceInput {
    id: String
  }

  input CreateTicketInput {
    title: String
    content: String
    type: failureType
    severity: severityType
    status: Status
    authors: [referenceUserInput!]
    services: [referenceServiceInput!]
    endDate: String
  }

  input DeleteTicketInput {
    id: String!
  }
`

export default inputs
