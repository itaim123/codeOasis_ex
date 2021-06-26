import React, { useContext } from 'react';
import TicketContext from '../../Context/TicketContext';
import SingleTicket from '../Ticket/Ticket';
import { removeDuplicates } from '../../utils/utis';
import { Ticket } from '../../Context/TicketState';

import './Tickets.scss';

const Tickets = () => {
  const ticketContext = useContext(TicketContext);
  const {
    state: { tickets, pinnedTickets },
  } = ticketContext;
  let updatedTicketsArray : Ticket[] = tickets;

    updatedTicketsArray = removeDuplicates(tickets, pinnedTickets)

  console.log(updatedTicketsArray, updatedTicketsArray.length)

  const pinnedTicketsElement: JSX.Element = pinnedTickets ? (
    <ul className='tickets pinned'>
      {pinnedTickets.map((pinnedTicket) => (
        <SingleTicket
          key={'pin' + pinnedTicket.id}
          ticket={pinnedTicket}
          pinnedTicket={true}
        />
      ))}
    </ul>
  ) : null;

  const ticketsElement: JSX.Element = updatedTicketsArray ? (
    <ul className='tickets'>
      {updatedTicketsArray.map((ticket) => (
        <SingleTicket key={ticket.id} ticket={ticket} />
      ))}
    </ul>
  ) : (
    <h2>Loading..</h2>
  );

  return (
    <>
      {pinnedTicketsElement}
      {ticketsElement}
    </>
  );
};

export default Tickets;
