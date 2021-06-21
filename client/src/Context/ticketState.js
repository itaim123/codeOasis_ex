import React, { useReducer } from 'react';
import ticketReducer from './ticketReducer';
import TicketContext from './ticketContext';
import { TYPES } from './types';

const initialState = {
  tickets: [],
  page: 1,
  incPage,
  decPage,
  setTickets,
  pageDefault,
};

const TicketState = ({ children }) => {
  const [state, dispatch] = useReducer(ticketReducer, initialState);

  const incPage = (page, searchVal) =>
    dispatch({ type: TYPES.INC_PAGE, payload: { page, searchVal } });

  const decPage = (page, searchVal) =>
    dispatch({ type: TYPES.DEC_PAGE, payload: { page, searchVal } });

  const setTickets = (tickets) =>
    dispatch({ type: TYPES.SET_TICKETS, payload: tickets });

  const pageDefault = () => dispatch({ type: TYPES.PAGE_DEFAULT });

  return (
    <TicketContext.Provider
      value={{
        tickets: state.tickets,
        page: state.page,
        incPage,
        decPage,
        setTickets,
        pageDefault,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export default TicketState;
