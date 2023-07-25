import type { Department, GenericInput, Role } from '../../../shared/types/core/types'

type UserDTO = {
  name: string
  lastname: string
  email: string
  password: string
  role: Role
  departmentName: Department
}

type CreateUserInput = GenericInput<UserDTO>
type FindUserById = GenericInput<{ id: string }>

export type { CreateUserInput, FindUserById, UserDTO }

