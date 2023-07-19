import type { Department, GenericInput, Role } from '../../../shared/types/core/types'

type UserData = {
  name: string
  lastname: string
  email: string
  password: string
  role: Role
  departmentName: Department
}

type CreateUserInput = GenericInput<UserData>
type FindUserById = GenericInput<{ id: string }>

export type { CreateUserInput, FindUserById, UserData }
