import gql from 'graphql-tag'
import inputs from './inputs'
import mutations from './mutations'
import querys from './queries'

const typeDefs = gql`
  "Tipos de fallos"
  enum failureType {
    "Fallo eléctrico"
    Electrical
    "Fallo de frecuencia"
    Frequency
    "Fallo de hardware"
    Hardware
    "Fallo de software"
    Software
  }

  "Estados de los tickets"
  enum Status {
    "Abierto"
    OPEN
    "En progreso"
    IN_PROGRESS
    "Resuelto"
    RESOLVED
    "Cerrado"
    CLOSED
  }

  "Tipos de severidad de las fallas"
  enum severityType {
    "Crítico"
    Critical
    "Mayor"
    Major
    "Menor"
    Minor
  }

  "Etiquetas de los tickets"
  enum Tag {
    "AP"
    AP
    "PTP"
    PTP
    "CP"
    CP
    "Eléctrico"
    Electrical
    "Frecuencia"
    Frequency
    "Hardware"
    Hardware
    "Software"
    Software
    "Crítico"
    Critical
    "Mayor"
    Major
    "Menor"
    Minor
    "Abierto"
    OPEN
    "En progreso"
    IN_PROGRESS
    "Resuelto"
    RESOLVED
    "Cerrado"
    CLOSED
    "IT"
    IT
    "Soporte"
    SUPPORT
    "NOC"
    NOC
    "HR"
    HR
    "Finanzas"
    FINANCE
    "Marketing"
    MARKETING
    "Ventas"
    SALES
    "Servicio al cliente"
    CUSTOMER_SERVICE
    "MBPS"
    MBPS
  }

  ${inputs}

  "Definición de los comentarios de los tickets"
  type Comment {
    "Identificador del comentario"
    id: String!
    "Contenido del comentario"
    content: String!
    "Autor del comentario"
    author: User
    "Ticket al que pertenece el comentario"
    ticket: Ticket!
    "Fecha de creación del comentario"
    createdAt: String!
    "Fecha de actualización del comentario"
    updatedAt: String!
  }

  "Definición del tipo Ticket"
  type Ticket {
    "Identificador del ticket"
    id: String!
    "Título del ticket"
    title: String!
    "Contenido del ticket"
    content: String!
    "Tipo de fallo"
    type: failureType!
    "Severidad del fallo"
    severity: severityType!
    "Servicios afectados"
    services: [Service!]
    "Autor del ticket"
    author: User!
    "Etiquetas del ticket"
    tags: [Tag!]
    "Editores del ticket"
    editors: [User!]
    "Fecha de creación del ticket"
    createdAt: String!
    "Fecha de actualización del ticket"
    updatedAt: String!
    "Primer comentario del ticket"
    firstReply: String!
    "Fecha de cierre del ticket"
    closedAt: String!
    "Hora de cierre del ticket"
    timeToClose: String!
    "Comentarios del ticket"
    comments: [Comment]!
  }

  ${querys}
  ${mutations}
`

export default typeDefs
