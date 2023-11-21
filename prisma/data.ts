import { Client, Coordinates, Department, RadioStation, Role, Service, User } from '@prisma/client'
import { randomUUID } from 'crypto'

export const roles: Role[] = [
  {
    id: randomUUID(),
    name: 'ADMIN',
    permissions: ['READ', 'WRITE', 'DELETE']
  },
  {
    id: randomUUID(),
    name: 'USER',
    permissions: ['READ']
  }
]

export const departments: Department[] = [
  {
    id: randomUUID(),
    name: 'IT',
    createdAt: new Date(),
    updatedAt: null
  },
  {
    id: randomUUID(),
    name: 'HR',
    createdAt: new Date(),
    updatedAt: null
  },
  {
    id: randomUUID(),
    name: 'NOC',
    createdAt: new Date(),
    updatedAt: null
  }
]

export const users: User[] = [
  {
    id: randomUUID(),
    firstName: 'Santiago',
    lastName: 'Hernandez',
    email: 'shernandez@gmail.com',
    password: '123456',
    role: 'ADMIN',
    departmentName: 'IT',
    createdAt: new Date(),
    updatedAt: null
  },
  {
    id: randomUUID(),
    firstName: 'Juan',
    lastName: 'Perez',
    email: 'jperez@gmail.com',
    password: '123456',
    role: 'USER',
    departmentName: 'IT',
    createdAt: new Date(),
    updatedAt: null
  }
]

export const cordinates: Coordinates[] = [
  {
    id: '12344321',
    latitude: '10.0000',
    longitude: '10.0000',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

export const radioStations: RadioStation[] = [
  {
    id: randomUUID(),
    city: 'Caracas',
    code: 'RBS-001',
    coordinatesId: cordinates[0].id,
    municipality: 'Baruta',
    name: 'Radio Baruta',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

export const clients: Client[] = [
  {
    id: randomUUID(),
    name: 'Arturo',
    lastname: 'Hernandez',
    email: 'arturo@gmail.com',
    address: 'Calle 1',
    phone: '04141234567',
    createdAt: new Date(),
    updatedAt: null
  }
]

export const services: Service[] = [
  {
    id: randomUUID(),
    capacity: 100,
    code: 'IT-001',
    name: "Automercados Plaza's",
    ownerId: clients[0].id,
    rsId: radioStations[0].id,
    createdAt: new Date(),
    scale: 'MBPS',
    type: 'AP',
    updatedAt: new Date()
  }
]
