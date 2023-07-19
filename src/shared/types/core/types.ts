type GenericInput<T> = {
  input: T
}

type Department =
  | 'IT'
  | 'SUPPORT'
  | 'NOC'
  | 'HR'
  | 'FINANCE'
  | 'MARKETING'
  | 'SALES'
  | 'CUSTOMER_SERVICE'

type Role = 'USER' | 'SUPERUSER' | 'ADMIN'

export type { Department, GenericInput, Role }
