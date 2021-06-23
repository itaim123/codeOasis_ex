import { Ticket } from './TicketState';

export enum ActionType {
    INC_PAGE,
    DEC_PAGE,
    SET_TICKETS,
    PAGE_DEFAULT
}

export interface IncPageType {
    type: ActionType.INC_PAGE;
    payload: string
}

export interface DecPageType {
    type: ActionType.DEC_PAGE;
    payload: string
}

export interface SetTicketsType {
    type: ActionType.SET_TICKETS;
    payload: Ticket[]
}

export interface PageDefaultType {
    type: ActionType.PAGE_DEFAULT
}

export type TicketActions = IncPageType | DecPageType | SetTicketsType | PageDefaultType;
