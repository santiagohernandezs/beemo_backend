import rsDef from '@radioStation/infrastructure/typedefs/typedefs'
import serviceDef from '@service/infrastructure/typedefs/typedefs'
import ticketDef from '@tickets/infrastructure/typedefs/typedefs'
import userDef from '@user/infrastructure/typedefs/typedefs'
import gql from 'graphql-tag'

const typeDefs = gql`
  ${userDef}
  ${ticketDef}
  ${serviceDef}
  ${rsDef}
`

export default typeDefs
