import React, { FC, useState, useEffect } from 'react';
import { createApiClient, Ticket } from './api';

import Button from './components/UI/Button/Button';
import Tickets from './components/Tickets/Tickets';

import './App.scss';

const api = createApiClient();

const AppFunctional: FC = () => {
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [tickets, setTickets] = useState<Ticket[]>([]);

  let searchDebounce: any = null;

  useEffect(() => {
    (async function () {
      setTickets(await api.getTickets(page));
    })();
    console.log('use effect, fetches tickets123')
    // eslint-disable-next-line
  }, []);

  const changePage = async (pageNum: string) => {
    const updatedPage: number = pageNum === 'inc' ? page + 1 : page - 1;
    setPage(updatedPage);
    console.log(page, updatedPage)
    setTickets(await api.getTickets(updatedPage, search));
  };

  const onSearch = async (val: string) => {
    clearTimeout(searchDebounce);

    searchDebounce = setTimeout(async () => {
      setSearch(val);
      setTickets(await api.searchTickets(val));
      setPage(1);
    }, 300);
  };

  console.log(tickets);

  return (
      <main>
        <h1>Tickets List</h1>
        <header>
          <input
            type='search'
            placeholder='Search...'
            onChange={(e) => onSearch(e.target.value)}
          />
        </header>
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
