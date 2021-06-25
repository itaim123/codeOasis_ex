import { createContext, Dispatch } from 'react';
import { Ticket } from '../api';
import { initialTicketState, TicketStateInterface } from './TicketState';
import { TicketActions } from './ticketActions';

export type ContextType = {
  page: number;
  tickets: Ticket[];
  pageDefault: () => void;
  incPage: () => void;
  decPage: () => void;
  setPage: () => void;
  setTickets: () => void;
};

const TicketContext = createContext<{state: TicketStateInterface, dispatch: Dispatch<TicketActions>}>({
  state: initialTicketState,
  dispatch: () => undefined
})

export default TicketContext;
