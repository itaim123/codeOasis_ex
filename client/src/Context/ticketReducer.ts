import {
  ActionType,
  TicketActions,
  SetTicketsType,
  PageDefaultType,
  SetPageType,
  GetByPageType,
  SetSearchTermType,
  AddPinnedTicketType,
  RemovePinnedTicketType,
  SetDateAfterType,
  SetDateBeforeType,
  CheckedDateBeforeType,
  CheckedDateAfterType
} from './ticketActions';
import { TicketStateInterface, Ticket } from './TicketState';
import { findExistingTicketAndReplace } from '../utils/utis';

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
        page: 1
      };
    case ActionType.ADD_PINNED_TICKET:
      const newArr = findExistingTicketAndReplace(state.pinnedTickets, action.payload)
        return {
          ...state,
          pinnedTickets: newArr,
        };
    case ActionType.REMOVE_PINNED_TICKET:
      let filteredPinnedArray = state.pinnedTickets.filter(
        (ticket) => ticket.id !== action.payload
      );
      return {
        ...state,
        pinnedTickets: filteredPinnedArray,
      };
      case ActionType.SET_DATE_BEFORE: 
      return {
        ...state,
        beforeDate: action.payload
      }
      case ActionType.SET_DATE_AFTER: 
      return {
        ...state,
        afterDate: action.payload
      }
      case ActionType.CHECKED_DATE_BEFORE: 
      console.log('set date before', action.payload)
      return {
        ...state,
        checkedDateBefore: action.payload
      }
      case ActionType.CHECKED_DATE_AFTER:
        console.log('set date after', action.payload)
      return {
        ...state,
        checkedDateBefore: action.payload
      }
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

export const removePinnedTicket = (id: string) : RemovePinnedTicketType => ({
  type: ActionType.REMOVE_PINNED_TICKET,
  payload: id,
});

export const setDateBefore = ( formattedDate : string ) : SetDateBeforeType => ({
  type: ActionType.SET_DATE_BEFORE,
  payload: formattedDate
})

export const setDateAfter = ( formattedDate : string ) : SetDateAfterType => ({
  type: ActionType.SET_DATE_AFTER,
  payload: formattedDate
})

export const checkedDateBefore = ( isChecked : boolean ) : CheckedDateBeforeType => ({
  type: ActionType.CHECKED_DATE_BEFORE,
  payload: isChecked
})

export const checkedDateAfter = ( isChecked : boolean ) : CheckedDateAfterType => ({
  type: ActionType.CHECKED_DATE_AFTER,
  payload: isChecked
})

