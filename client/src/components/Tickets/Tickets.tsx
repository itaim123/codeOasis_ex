import React, { useContext } from 'react';
import TicketContext from '../../Context/TicketContext';
import SingleTicket from '../Ticket/Ticket';

import './Tickets.scss';

const Tickets = () => {
  const ticketContext = useContext(TicketContext);
  const {
    state: { tickets },
  } = ticketContext;

  const ticketsElement = tickets ? (
    <ul className='tickets'>
      {tickets.map((ticket) => (
        <SingleTicket key={ticket.id} ticket={ticket} />
      ))}
    </ul>
  ) : (
    <h2>Loading..</h2>
  );

  return (
    <>
      {ticketsElement}
    </>
  );
};

export default Tickets;
