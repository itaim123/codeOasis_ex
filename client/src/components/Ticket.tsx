import React, { useState } from 'react';
import { Ticket } from '../api';

const TicketCmp = ({ ticket }) => {
  const [pinned, setPinned] = useState(false);
  const renderLabels = (ticket: Ticket) => {
    const { labels } = ticket;
    if (labels.length !== 0) {
      return (
        <div className='labels'>
          {labels.map((label) => (
            <span className='label' key={label}>
              {label}
            </span>
          ))}
        </div>
      );
    }
  };

  const pinHandler = () => setPinned(prev => !prev)

  return (
    <li key={ticket.id} className='ticket'>
      <h5 className='title'>{ticket.title}</h5>
      <span className='pinned' onClick={pinHandler}>{pinned ? 'Unpin' : 'Pin'}</span>
      <div className='content'>{ticket.content}</div>
      <footer>
        <div className='meta-data'>
          By {ticket.userEmail} |{' '}
          {new Date(ticket.creationTime).toLocaleString()}
        </div>
        {/* Check if labels property exists on ticket */}
        {ticket.labels && renderLabels(ticket)}
      </footer>
    </li>
  );
};

export default TicketCmp;
