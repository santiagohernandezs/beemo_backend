import gql from 'graphql-tag'

// Question: Phone is required?
const inputs = gql`
  input CreateClientInput {
    name: String!
    lastname: String!
    email: String!
    phone: String
    address: String!
  }

  input UpdateData {
    name: String
    lastname: String
    email: String
    phone: String
    address: String
  }

  input UpdateClientInput {
    id: String!
    data: UpdateData!
  }

  input FindClientById {
    id: String!
  }
`

export default inputs
