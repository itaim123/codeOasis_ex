import React, { Suspense, FC, useEffect, useContext } from 'react';
import { createApiClient } from './api';
import TicketContext from './Context/TicketContext';
import { setTickets, setTotalResults } from './Context/ticketReducer';
import SearchInput from './components/UI/SearchInput/SearchInput';
import PaginationButtons from './components/PaginationButtons/PaginationButtons';
import Results from './components/Results/Results';
import DatePickers from './components/DatePickers/DatePickers';
import './App.scss';

const Tickets = React.lazy(() => import('./components/Tickets/Tickets'));
const api = createApiClient();

const App: FC = () => {
  const { state, dispatch } = useContext(TicketContext);
  const { totalResults } = state;
  useEffect(() => {
    (async function () {
      const { tickets, totalLength } = await api.getTickets();
      dispatch(setTickets(tickets));
      dispatch(setTotalResults(totalLength));
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <h1>Tickets List</h1>
      <DatePickers />
      <SearchInput />
      <PaginationButtons />
      <Results />
      <Suspense fallback={<div>Loading...</div>}>
      {totalResults ? <Tickets /> : <div>No results were found...</div>}
      </Suspense>
    </main>
  );
};

export default App;
