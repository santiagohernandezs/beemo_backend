import gql from 'graphql-tag'

const typedefs = gql`
  type Client = {
    name: String!
    lastName: String!
  }

`

export default typedefs
