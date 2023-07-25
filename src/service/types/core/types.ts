import { Ticket } from '@prisma/client'

type ServiceType = 'AP' | 'PTP' | 'CP'
type Scale = 'MBPS' | 'GBPS' | 'TBPS'

type Service = {
  id: string
  name: string
  type: ServiceType
  code: string
  capacity: number
  scale: Scale
  rs: string
  ownerId: string
  createdAt: Date
  updatedAt: Date
  tickets: Ticket[]
}

export type { Scale, Service, ServiceType }
