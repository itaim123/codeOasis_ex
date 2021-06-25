import React, { useContext } from 'react';
import TicketContext from '../Context/TicketContext';
import { setPage, setTickets } from '../Context/ticketReducer';
import { createApiClient } from '../api';

const api = createApiClient();
const ticketContext = useContext(TicketContext);
const { state: { page }, dispatch } = ticketContext;


export const changePage = (pageDirection: string, searchTerm: string) => {
    (async () => {
        const updatedPageNumber = pageDirection === 'inc' ? page + 1 : page - 1;
        dispatch(setPage(updatedPageNumber));
        dispatch(setTickets(await api.getTickets(updatedPageNumber, searchTerm)));
    })()
  };