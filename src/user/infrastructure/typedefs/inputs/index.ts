import gql from 'graphql-tag'

const inputs = gql`
  input CreateUserInput {
    name: String
    lastname: String
    email: String
    password: String
    role: Role
    departmentName: Department
  }
`

export default inputs
