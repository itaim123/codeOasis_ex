import {
  ActionType,
  TicketActions,
  SetTicketsType,
  PageDefaultType,
  SetPageType,
  GetByPageType,
  SetSearchTermType,
  AddPinnedTicketType,
} from './ticketActions';
import { TicketStateInterface, Ticket } from './TicketState';

export const ticketReducer = (
  state: TicketStateInterface,
  action: TicketActions
): TicketStateInterface => {
  switch (action.type) {
    case ActionType.SET_PAGE: {
      return {
        ...state,
        page: action.payload,
      };
    }
    case ActionType.SET_TICKETS:
      return {
        ...state,
        tickets: action.payload,
      };
    case ActionType.PAGE_DEFAULT:
      return {
        ...state,
        page: 1,
      };
    case ActionType.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case ActionType.ADD_PINNED_TICKET:
      return {
        ...state,
        pinnedTickets: [...state.pinnedTickets, action.payload],
      };
    case ActionType.REMOVE_PINNED_TICKET:
      let filteredPinnedArray = state.pinnedTickets.filter(
        (ticket) => ticket.id !== action.payload
      );
      return {
        ...state,
        pinnedTickets: filteredPinnedArray,
      };
    default:
      return state;
  }
};

export const setPage = (pageNum: number): SetPageType => ({
  type: ActionType.SET_PAGE,
  payload: pageNum,
});

export const setTickets = (tickets: Ticket[]): SetTicketsType => ({
  type: ActionType.SET_TICKETS,
  payload: tickets,
});

export const getByPage = (page: number, searchVal: string): GetByPageType => ({
  type: ActionType.GET_BY_PAGE,
  payload: { page, search: searchVal },
});

export const setSearchTerm = (searchVal: string): SetSearchTermType => ({
  type: ActionType.SET_SEARCH_TERM,
  payload: searchVal,
});

export const pageDefault = (): PageDefaultType => ({
  type: ActionType.PAGE_DEFAULT,
});

export const addPinnedTicket = (Ticket: Ticket): AddPinnedTicketType => ({
  type: ActionType.ADD_PINNED_TICKET,
  payload: Ticket,
});

export const removePinnedTicket = (id: number) => ({
  type: ActionType.REMOVE_PINNED_TICKET,
  payload: id,
});
