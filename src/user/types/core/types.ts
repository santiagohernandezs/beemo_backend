import { User } from '@prisma/client'
import type { GenericInput } from '@shared/types/core/types'

type UserDTO = Pick<User, 'firstName' | 'lastName' | 'email' | 'password' | 'role' | 'departmentName'>

type UserId = Pick<User, 'id'>

type FindUserById = GenericInput<UserId>
type RemoveUserInput = GenericInput<UserId>
type CreateUserInput = GenericInput<UserDTO>
type LoginUserInput = GenericInput<Pick<UserDTO, 'email' | 'password'>>

export type { CreateUserInput, FindUserById, LoginUserInput, RemoveUserInput, User, UserDTO }
