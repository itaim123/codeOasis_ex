import { createContext } from 'react';
import { Ticket } from '../api';

export type ContextType = {
  page: number;
  tickets: Ticket[];
};

const ticketContext = createContext<ContextType>({
    page: 1,
    tickets: [],
});

export default ticketContext;
