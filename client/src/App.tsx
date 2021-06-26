import React, { FC, useEffect, useContext } from 'react';
import { createApiClient } from './api';


import Tickets from './components/Tickets/Tickets';
import TicketContext from './Context/TicketContext';
import { setTickets } from './Context/ticketReducer';
import SearchInput from './components/UI/SearchInput/SearchInput';
import PaginationButtons from './components/PaginationButtons/PaginationButtons';
import Results from './components/Results/Results';
import DatePicker from './components/UI/DatePicker/DatePicker';

import './App.scss';

const api = createApiClient();

const App: FC = () => {
  const { dispatch } = useContext(TicketContext);
  
  useEffect(() => {
    (async function () {
      dispatch(setTickets(await api.getTickets()));
    })();
    // eslint-disable-next-line
  }, []);

  return (
      <main>
        <h1>Tickets List</h1>
        <PaginationButtons />
        <DatePicker />
        <SearchInput />
        <Results />
        <Tickets />
      </main>
  );
};

export default App;
