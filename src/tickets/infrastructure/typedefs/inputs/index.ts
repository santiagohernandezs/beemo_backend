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
    author: referenceUserInput!
    services: [referenceServiceInput!]
    tags: [Tag!]
    endDate: String
  }

  input DeleteTicketInput {
    id: String!
  }

  input UpdateTicketInput {
    id: String!
    title: String
    content: String
    type: failureType
    severity: severityType
    status: Status
    services: [referenceServiceInput]
    tags: [Tag]
  }

  input AddEditorInput {
    id: String!
    editor: referenceUserInput!
  }

  input CloseTicketInput {
    id: String!
  }
`

export default inputs
