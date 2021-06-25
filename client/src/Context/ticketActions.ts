import { Ticket } from './TicketState';

export enum ActionType {
    SET_TICKETS,
    PAGE_DEFAULT,
    SET_PAGE,
    GET_BY_PAGE,
    SET_SEARCH_TERM,
    ADD_PINNED_TICKET,
    REMOVE_PINNED_TICKET
}

export interface SetTicketsType {
    type: ActionType.SET_TICKETS;
    payload: Ticket[]
}

export interface AddPinnedTicketType {
    type: ActionType.ADD_PINNED_TICKET,
    payload: Ticket
}

export interface RemovePinnedTicketType {
    type: ActionType.REMOVE_PINNED_TICKET,
    payload: string
}

export interface PageDefaultType {
    type: ActionType.PAGE_DEFAULT
}

export interface SetPageType {
    type: ActionType.SET_PAGE,
    payload: number
}

export interface GetByPageType {
    type: ActionType.GET_BY_PAGE,
    payload: { page: number, search: string }
}

export interface SetSearchTermType {
    type: ActionType.SET_SEARCH_TERM,
    payload: string
}

export type TicketActions = SetTicketsType | PageDefaultType | SetPageType | GetByPageType | SetSearchTermType | AddPinnedTicketType | RemovePinnedTicketType;
