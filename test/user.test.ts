import type { User } from '@prisma/client'
import { DepartmentType, RoleType } from '@prisma/client'
import { prismaMock } from '../src/db/singleton'
import { createUser, getUsers } from '../src/user/application/useCases'

test('should create new user ', async () => {
  const expectedUser = {
    firstName: 'Rich',
    lastName: 'Haines',
    email: 'rich@mail.com',
    password: 'password',
    role: RoleType.ADMIN,
    departmentName: DepartmentType.IT,
    id: '1',
    createdAt: new Date(),
    updatedAt: new Date()
  }

  prismaMock.user.create.mockResolvedValueOnce(expectedUser)

  await expect(createUser(expectedUser)).resolves.toEqual(expectedUser)
})

test('should throw error when create new user ', async () => {
  const expectedUser = {
    firstName: 'Rich',
    lastName: 'Haines',
    email: 'rich@mail.com',
    password: 'password',
    role: RoleType.ADMIN,
    departmentName: DepartmentType.IT,
    id: '1',
    createdAt: new Date(),
    updatedAt: new Date()
  }

  prismaMock.user.create.mockRejectedValueOnce(expectedUser)

  await expect(createUser(expectedUser)).rejects.toThrow('Cannot create user')
})

test('should get all users', async () => {
  const expectedUser: User[] = [
    {
      firstName: 'Rich',
      lastName: 'Haines',
      email: 'rich@mail.com',
      password: 'password',
      role: RoleType.ADMIN,
      departmentName: DepartmentType.IT,
      id: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'john',
      lastName: 'doe',
      email: 'jdow@mail.com',
      password: 'password',
      role: RoleType.ADMIN,
      departmentName: DepartmentType.IT,
      id: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]

  prismaMock.user.findMany.mockResolvedValueOnce(expectedUser)

  await expect(getUsers()).resolves.toEqual(expectedUser)
})
