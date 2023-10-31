import type { User } from '@user/types/core/types'
import type { JwtPayload } from 'jsonwebtoken'

type Context = {
  token: string
  currentUser: Pick<User, 'id' | 'email'> & Pick<JwtPayload, 'iat' | 'exp'>
}

export type { Context }
