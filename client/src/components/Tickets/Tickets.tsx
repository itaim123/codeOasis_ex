import React from 'react';
import SingleTicket from '../Ticket/Ticket';

import './Tickets.scss';

const Tickets = ({ tickets }) => {
    return (
        <ul className='tickets'>
        {tickets.map((ticket) => (
          <SingleTicket key={ticket.id} ticket={ticket} />
        ))}
      </ul>
    )
}

export default Tickets;
