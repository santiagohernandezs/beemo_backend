import type { Department, GenericInput, Role } from '@shared/types/core/types'
import type { TicketDTO as Ticket } from '@tickets/types/core/types'

type User = {
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
  role: Role
  departmentName: Department
  createdAt: string
  updatedAt: string
  tickets: Ticket[]
}

type UserDTO = Pick<
  User,
  'firstName' | 'lastName' | 'email' | 'password' | 'role' | 'departmentName'
>

type FindUserById = GenericInput<Pick<User, 'id'>>
type RemoveUserInput = GenericInput<Pick<User, 'id'>>
type CreateUserInput = GenericInput<UserDTO>
type LoginUserInput = GenericInput<Pick<UserDTO, 'email' | 'password'>>

export type {
  CreateUserInput,
  FindUserById,
  LoginUserInput,
  RemoveUserInput,
  User,
  UserDTO
}

