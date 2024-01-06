import type { Ticket as ticket, User } from '@prisma/client'
import type { Service } from '@service/types/core/types'
import type { Tag } from '@shared/types/core/types'

type Ticket = ticket & {
  editors: User[]
  author: User
  services: Service[]
  tags: Tag[]
  _count: {
    comments: number
  }
}

type TicketDTO = Pick<Ticket, 'title' | 'content' | 'type' | 'severity' | 'author' | 'editors' | 'services' | 'tags'>

export type { Ticket, TicketDTO }
