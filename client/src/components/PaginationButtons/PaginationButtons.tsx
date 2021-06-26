import React, { FC, useContext } from 'react';
import Button from '../UI/Button/Button';
import { setTickets, setPage } from '../../Context/ticketReducer';
import TicketContex from '../../Context/TicketContext';
import { createApiClient } from '../../api';
import './PaginationButtons.scss';

const api = createApiClient();

const PaginationButtons: FC = () => {
  const { state, dispatch } = useContext(TicketContex);
  const { searchTerm, page } = state;

  const changePage = async (pageNum: string) => {
    const updatedPageNumber = pageNum === 'inc' ? page + 1 : page - 1;
    dispatch(setPage(updatedPageNumber));
    dispatch(setTickets(await api.getTickets(updatedPageNumber, searchTerm)));
    // Throw Dispatches Here
  };

  //  disabled={page === 1 ? true : false}

  return (
    <div className='paginationButtons'>
      <div className={`${page === 1 ? 'hidden' : ''}`}><Button onClick={() => changePage('dec')}>Decrement</Button></div>
      <div>Page number is {page}</div>
      <div><Button onClick={() => changePage('inc')}>Increment</Button></div>
    </div>
  );
};

export default PaginationButtons;
