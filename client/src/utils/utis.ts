// import React, { useContext } from 'react';
// import TicketContext from '../Context/TicketContext';
// import { setPage, setTickets } from '../Context/ticketReducer';
// import { createApiClient } from '../api';
import { Ticket } from '../Context/TicketState';

// const api = createApiClient();
// const ticketContext = useContext(TicketContext);
// const {
//   state: { page },
//   dispatch,
// } = ticketContext;

// export const changePage = (pageDirection: string, searchTerm: string) => {
//   (async () => {
//     const updatedPageNumber = pageDirection === 'inc' ? page + 1 : page - 1;
//     dispatch(setPage(updatedPageNumber));
//     dispatch(setTickets(await api.getTickets(updatedPageNumber, searchTerm)));
//   })();
// };

export const findExistingTicketAndReplace = (
  pinnedTicketsArray: Ticket[],
  pinnedTicket: Ticket
) => {
  const foundTicket = pinnedTicketsArray.find(
    (ticket) => ticket.id === pinnedTicket.id
  );
  if (!foundTicket) {
    pinnedTicketsArray =
      pinnedTicketsArray.length === 5
        ? [pinnedTicket, ...pinnedTicketsArray.slice(0, 4)]
        : [pinnedTicket, ...pinnedTicketsArray];
  }
  return pinnedTicketsArray;
};

export const removeDuplicates = (
  tickets: Ticket[],
  pinnedTickets: Ticket[]
) => {
  // return the tickets array after removing duplicates
  let newArr: Ticket[] = [...tickets];
  for (let pinned of pinnedTickets) {
    const found = tickets.find((ticket) => pinned.id === ticket.id);
    if (found) {
      newArr = newArr.filter((ticket) => ticket.id !== found.id);
    }
  }
  return newArr;
};

export const getTodayFormattedDate = (): string => {
  const today = new Date();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  return `${day}/${month}/${today.getFullYear()}`;
};
