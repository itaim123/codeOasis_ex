import { ActionType, TicketActions, IncPageType, DecPageType, SetTicketsType, PageDefaultType } from './ticketActions';
import { TicketStateInterface, Ticket } from './TicketState';

export const ticketReducer = (state: TicketStateInterface, action : TicketActions): TicketStateInterface => {
    switch(action.type){
        case ActionType.INC_PAGE:
            console.log('nice', action.payload, 'asdasd')
            return {
                ...state,
                page: state.page + 1 
            }
        case ActionType.DEC_PAGE:
            return {
                ...state,
                page: state.page - 1 
            }
        case ActionType.SET_TICKETS:
            console.log('set tickets')
            return {
                ...state,
                tickets: action.payload,
                page: 1
            }
        case ActionType.PAGE_DEFAULT:
            return {
                ...state,
                page: 1
            }
        default:
            return state
    }
}

    export const incPage = (searchVal: string | null): IncPageType =>
     ({ type: ActionType.INC_PAGE, payload: searchVal });
  
    export const decPage = (searchVal: string): DecPageType =>
     ({ type: ActionType.DEC_PAGE, payload: searchVal } );
  
    export const setTickets = (tickets: Ticket[]): SetTicketsType =>
     ({ type: ActionType.SET_TICKETS, payload: tickets });
  
    export const pageDefault = (): PageDefaultType =>({ type:ActionType.PAGE_DEFAULT });