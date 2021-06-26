import React, { useState, FC, useContext, useEffect } from 'react';
import { Ticket } from '../../api';
import Content from './Content/Content';
import TicketContext from '../../Context/TicketContext';
import {
  addPinnedTicket,
  removePinnedTicket,
} from '../../Context/ticketReducer';

import './Ticket.scss';

type TicketProps = {
  key: string;
  ticket: Ticket;
  pinnedTicket?: boolean;
};

const TicketCmp: FC<TicketProps> = ({ ticket, pinnedTicket }) => {
  const [pinned, setPinned] = useState(false);

  useEffect(()=>pinnedTicket && setPinned(true), [setPinned,pinnedTicket])
  
  const ticketContext = useContext(TicketContext);
  const { dispatch } = ticketContext;

  const renderLabels = (ticket: Ticket): JSX.Element => (
    <div className={`labels`}>
      {ticket.labels.map((label) => (
        <span className='label' key={label}>
          {label}
        </span>
      ))}
    </div>
  );

  const pinHandler = () => {
    setPinned((pinned) => !pinned);
    console.log(pinned)
    if (!pinned) {
      dispatch(addPinnedTicket(ticket));
    } else {
      console.log('Removing!')
      dispatch(removePinnedTicket(ticket.id));
    }
  };

  return (
    <li key={ticket.id} className={`ticket ${pinnedTicket ? 'pinnedTicket' : ''}`}>
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
