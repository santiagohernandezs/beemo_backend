import { Role } from '@shared/types/core/types'
import { user } from '@user/domain/controllers'
import jwt from 'jsonwebtoken'
import { raise } from './errors'

const verifyToken = (token: string) =>
  jwt.verify(token, process.env.SECRET_KEY || 'secret')

const grantUser = async (token: string, role: Role) => {
  const tokenValidated = verifyToken(token) as { id: string; email: string }

  const currentUser = await user({ where: { id: tokenValidated.id } })

  if (!currentUser) throw new Error('User not found')

  if (currentUser?.role !== role) {
    raise('Auth', 'Not authorized')
  }

  return currentUser
}

export { grantUser, verifyToken }
