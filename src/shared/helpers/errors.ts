type Scope = 'User' | 'Ticket' | 'Auth' | 'Service' | 'RadioStation'

type User =
  | 'User not found'
  | 'Cannot create user'
  | 'User already exists'
  | 'Cannot find users'
  | 'Cannot find user'
  | 'Cannot delete user'
  | 'Cannot update user'

type Ticket =
  | 'Ticket not found'
  | 'Cannot create ticket'
  | 'Cannot find tickets'
  | 'Cannot find ticket'
  | 'Cannot delete ticket'
  | 'Cannot update ticket'

type Service =
  | 'Service not found'
  | 'Cannot create service'
  | 'Cannot find services'
  | 'Cannot find service'
  | 'Cannot delete service'

type RadioStation =
  | 'RadioStation not found'
  | 'Cannot create radioStation'
  | 'Cannot find radioStations'
  | 'Cannot find radioStation'
  | 'Cannot delete radioStation'

type Auth = 'Password not match' | 'Passwords are equals' | 'Not authorized' | 'Cannot sign token'

type ErrorMessage<Scope extends string> = Scope extends 'User'
  ? User
  : Scope extends 'Ticket'
  ? Ticket
  : Scope extends 'Auth'
  ? Auth
  : Scope extends 'Service'
  ? Service
  : Scope extends 'RadioStation'
  ? RadioStation
  : never

const raise = <TScope extends Scope, TMessage extends ErrorMessage<TScope>>(
  scope: TScope,
  message: TMessage,
  output?: any
): never => {
  throw new Error(
    `Error on ${scope} module, message: ${message}. ${output ? output : ''}`
  )
}

export { raise }

