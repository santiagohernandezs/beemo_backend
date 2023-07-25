type Type = 'Error' | 'Warning' | 'Info' | 'Success'
type Message =
  | 'User not found'
  | 'Ticket not found'
  | 'Password not match'
  | 'User already exists'
  | 'Passwords are equals'

const raise = (type: Type, message: Message): never => {
  throw new Error(`type: ${type}, message: ${message}`)
}

export { raise }