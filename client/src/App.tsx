import React, { FC, useState, useEffect, useContext } from 'react';
import { createApiClient, Ticket } from './api';

import Button from './components/UI/Button/Button';
import Tickets from './components/Tickets/Tickets';

import TicketContext from './Context/TicketContext';
import { setTickets } from './Context/ticketReducer'
import SearchInput from './components/UI/SearchInput/SearchInput';

import './App.scss';

const api = createApiClient();

const AppFunctional: FC = () => {
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  
  const { state: { tickets }, dispatch } = useContext(TicketContext);

  console.log('tickets', tickets);
  
  // let searchDebounce: any = null;

  
  useEffect(() => {
    (async function () {
      dispatch(setTickets(await api.getTickets(page)));
    })();
    // eslint-disable-next-line
  }, []);

  const changePage = async (pageNum: string) => {
    const updatedPage: number = pageNum === 'inc' ? page + 1 : page - 1;
    setPage(updatedPage);
    dispatch(setTickets(await api.getTickets(updatedPage, search)));
  };


  return (
      <main>
        <h1>Tickets List</h1>
        <SearchInput />
        <Button onClick={() => changePage('inc')}>Increment</Button>
        {page !== 1 && (
          <Button onClick={() => changePage('dec')}>Decrement</Button>
        )}
        {tickets ? (
          <div className='results'>Showing {tickets.length} results</div>
        ) : null}
        {tickets ? <Tickets tickets={tickets} /> : <h2>Loading..</h2>}
      </main>
  );
};

export default AppFunctional;
