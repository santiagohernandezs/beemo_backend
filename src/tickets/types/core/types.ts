import type { Ticket, User } from '@prisma/client'
import type { Service } from '../../../service/types/core/types.ts'
import type { Failure, Severity, Status, Tag } from '../../../shared/types/core/types.ts'

type TicketDTO = {
  title: string
  content: string
  type: Failure
  severity: Severity
  author: User
  editor?: User[]
  services: Service[]
  tags: Tag[]
}

type TicketModel = {
  id: string
  title: string
  content: string
  type: Severity
  tags: Tag[]
  services: Service[]
  author: User
  editor?: User[]
  status: Status
  createdAt: Date
  updatedAt: Date
  endDate?: Date
  timeToClose?: number
}

type TicketData = Ticket & {
  services: Service[]
  editors: User[]
  tags: User[]
}

export type { TicketDTO, TicketData, TicketModel }

