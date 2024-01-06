import { User } from '@prisma/client'
import { Role } from '@shared/types/core/types'
import { _userById } from '@user/application/helpers'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { raise } from './errors'

const signToken = (id: string, email: string): string =>
  jwt.sign(
    {
      id,
      email
    },
    process.env.SECRET_KEY || 'secret',
    {
      algorithm: 'HS256',
      expiresIn: '12h'
    }
  ) || raise('Auth', 'Cannot sign token')

const verifyToken = (token: string): string | JwtPayload => jwt.verify(token, process.env.SECRET_KEY || 'secret')

const grantUser = async (token: string, role: Role): Promise<User> => {
  const tokenValidated = verifyToken(token) as { id: string; email: string }

  const currentUser = await _userById(tokenValidated.id)

  if (currentUser?.role !== role) raise('Auth', 'Not authorized')

  return currentUser
}

export { grantUser, signToken, verifyToken }
