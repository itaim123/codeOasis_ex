import React, { useState, FC } from 'react';
import { Ticket } from '../../api';
import Content from './Content/Content';

import './Ticket.scss';

type TicketProps = {
  key: string;
  ticket: Ticket;
};


const TicketCmp: FC<TicketProps> = ({ ticket }) => {
  const [pinned, setPinned] = useState(false);

  const renderLabels = (ticket: Ticket) : JSX.Element => (
        <div className='labels'>
          {ticket.labels.map((label) => (
            <span className='label' key={label}>
              {label}
            </span>
          ))}
        </div>
      );

  const pinHandler = () => setPinned((pinned) => !pinned);

  return (
    <li key={ticket.id} className='ticket'>
      <h5 className='title'>{ticket.title}</h5>
      <span className='pinned' onClick={pinHandler}>
        {pinned ? 'Unpin' : 'Pin'}
      </span>
      <Content content={ticket.content} />
      <footer>
        <div className='meta-data'>
          By {ticket.userEmail} |{' '}
          {new Date(ticket.creationTime).toLocaleString()}
        </div>
        {ticket.labels && renderLabels(ticket)}
      </footer>
    </li>
  );
};

export default TicketCmp;
