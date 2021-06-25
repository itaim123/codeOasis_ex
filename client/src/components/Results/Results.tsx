import React, { useContext } from 'react';
import TicketContext from '../../Context/TicketContext';

import './Results.scss';

const Results = () => {
  const ticketContext = useContext(TicketContext);
  const {
    state: { tickets },
  } = ticketContext;

  return (
    <>
      {tickets ? (
        <div className='results'>Showing {tickets.length} results</div>
      ) : null}
    </>
  );
};

export default Results;
