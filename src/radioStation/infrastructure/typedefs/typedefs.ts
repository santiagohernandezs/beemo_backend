import gql from 'graphql-tag'
import inputs from './inputs'
import querys from './queries'

const typeDefs = gql`
  ${inputs}

  type Coordinates {
    id: String!
    latitude: String!
    longitude: String!
    createdAt: String!
    updatedAt: String
    rs: Rs!
  }

  type Rs {
    id: String!
    name: String!
    code: String!
    city: String!
    municipality: String!
    coordinates: Coordinates!
    createdAt: String!
    updatedAt: String
    services: [Service]
  }

  ${querys}
`

export default typeDefs
