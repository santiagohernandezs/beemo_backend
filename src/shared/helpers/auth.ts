import jwt from 'jsonwebtoken'
import { user } from '../../user/domain/controllers.ts'
import { Role } from '../types/core/types.ts'
import { raise } from './errors.ts'

const verifyToken = (token: string) =>
  jwt.verify(token, process.env.SECRET_KEY || 'secret')

const grantUser = async (token: string, role: Role) => {
  const tokenValidated = verifyToken(token) as { id: string; email: string }

  const currentUser = await user({ where: { id: tokenValidated.id } })

  if (!currentUser) throw new Error('User not found')

  if (currentUser?.role !== role) {
    raise('Error', 'Not authorized')
  }

  return currentUser
}

export { grantUser, verifyToken }
