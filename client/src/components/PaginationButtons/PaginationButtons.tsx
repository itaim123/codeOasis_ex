import React, { FC, useContext } from 'react';

import Button from '../UI/Button/Button';
import { setTickets, setPage } from '../../Context/ticketReducer';
import TicketContex from '../../Context/TicketContext';
import { createApiClient } from '../../api';
import './PaginationButtons.scss';

const api = createApiClient();

const PaginationButtons: FC = () => {
  const { state, dispatch } = useContext(TicketContex);
  const { searchTerm, page, totalResults } = state;
  const PAGE_SIZE = 20;
  const totalPages = Math.ceil(totalResults / PAGE_SIZE);

  const changePage = async (pageDir: string) => {
    const updatedPageNumber = pageDir === 'inc' ? page + 1 : page - 1;
    dispatch(setPage(updatedPageNumber));
    const { tickets } = await api.getTickets(updatedPageNumber, searchTerm);
    console.log(pageDir, tickets);
    dispatch(setTickets(tickets));
  };

  return (
    <div className='paginationButtons'>
      <div className={`changePageButton ${page === 1 ? 'hidden' : ''}`}>
        <div onClick={() => changePage('dec')}>{'<'}</div>
      </div>
      <div className='pageLabel'>
        {page} \ {totalPages}
      </div>

      <div
        className={`changePageButton ${page === totalPages ? 'hidden' : ''}`}
        onClick={() => changePage('inc')}
      >
        {'>'}
      </div>
    </div>
  );
};

export default PaginationButtons;
