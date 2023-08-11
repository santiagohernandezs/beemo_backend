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

type Tag =
  | 'AP'
  | 'PTP'
  | 'CP'
  | 'Electrical'
  | 'Frequency'
  | 'Hardware'
  | 'Software'
  | 'Critical'
  | 'Major'
  | 'Minor'
  | 'OPEN'
  | 'IN_PROGRESS'
  | 'RESOLVED'
  | 'CLOSED'
  | 'IT'
  | 'SUPPORT'
  | 'NOC'
  | 'HR'
  | 'FINANCE'
  | 'MARKETING'
  | 'SALES'
  | 'CUSTOMER_SERVICE'
  | 'MBPS'
  | 'GBPS'
  | 'TBPS'

type Role = 'USER' | 'SUPERUSER' | 'ADMIN'

type Severity = 'Critical' | 'Major' | 'Minor'

type Failure = 'Electrical' | 'Frequency' | 'Hardware' | 'Software'

type Status = 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED'

export type { Department, Failure, GenericInput, Role, Severity, Status, Tag }
