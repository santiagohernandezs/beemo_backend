import { Ticket } from '@prisma/client'
import { ResolverParams } from '@shared/types/core/types'
import { addEditor, closeTicket, createTicket, editTicket, erraseTicket } from '@tickets/application/useCases'
import type {
  CloseTicketInput,
  CreateTicketInput,
  DeleteTicketInput,
  UpdateEditorInput,
  UpdateTicketInput
} from '@tickets/types/graphql/types'

/**
 * Objeto Mutation que define las mutaciones GraphQL para los tickets.
 *
 * @property {Function} createTicket - Función que crea un ticket.
 * @property {Function} deleteTicket - Función que elimina un ticket.
 * @property {Function} addEditor - Función que añade un editor a un ticket.
 * @property {Function} closeTicket - Función que cierra un ticket.
 * @property {Function} updateTicket - Función que actualiza un ticket.
 */
export const Mutation: Record<string, ResolverParams> = {
  /**
   * Mutación para crear un ticket.
   *
   * @returns {Promise} Una promesa que se resuelve con el ticket creado.
   */
  createTicket: async (_: unknown, args: CreateTicketInput): Promise<Ticket> => await createTicket(args.input),
  /**
   * Mutación para eliminar un ticket.
   *
   * @returns {Promise} Una promesa que se resuelve con el ticket eliminado.
   */
  deleteTicket: async (_: unknown, args: DeleteTicketInput): Promise<Ticket> => await erraseTicket(args.input.id),
  /**
   * Mutación para añadir un editor a un ticket.
   *
   * @returns {Promise} Una promesa que se resuelve con el ticket actualizado.
   */
  addEditor: async (_: unknown, args: UpdateEditorInput): Promise<Ticket> => await addEditor(args.input),
  /**
   * Mutación para cerrar un ticket.
   *
   * @returns {Promise} Una promesa que se resuelve con el ticket actualizado.
   */
  closeTicket: async (_: unknown, args: CloseTicketInput): Promise<Ticket> => await closeTicket(args.input.id),
  /**
   * Mutación para actualizar un ticket.
   *
   * @returns {Promise} Una promesa que se resuelve con el ticket actualizado.
   */
  updateTicket: async (_: unknown, args: UpdateTicketInput): Promise<Ticket> => await editTicket(args.input)
}

export default Mutation
