import gql from 'graphql-tag'

const inputs = gql`
  "Input para referenciar un usuario."
  input referenceUserInput {
    id: String
  }

  "Input para referenciar un servicio."
  input referenceServiceInput {
    id: String
  }

  "Input para buscar un ticket por su Rs."
  input FindTicketByRs {
    id: String!
  }

  "Input para crear un ticket."
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

  "Input para eliminar un ticket."
  input DeleteTicketInput {
    id: String!
  }

  "Input para actualizar un ticket."
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

  "Input para agregar un editor a un ticket."
  input AddEditorInput {
    id: String!
    editor: referenceUserInput!
  }

  "Input para cerrar un ticket."
  input CloseTicketInput {
    id: String!
  }

  "Input para agregar un comentario a un ticket."
  input AddCommentInput {
    id: String!
    comment: String!
    user: String!
  }
`

export default inputs
