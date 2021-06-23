import {createContext, Dispatch } from 'react';
import { TicketActions } from './ticketActions';
import { TicketStateInterface, initialTicketState } from './TicketState';

const TicketContext = createContext<{state: TicketStateInterface, dispatch: Dispatch<TicketActions>}>({
    state: initialTicketState,
    dispatch: () => undefined
})

export default TicketContext;