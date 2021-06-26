import React, { FC, useContext } from 'react';
import { createApiClient } from '../../../api';
import { setTickets, setSearchTerm, setTotalResults } from '../../../Context/ticketReducer';
import TicketContext from '../../../Context/TicketContext';
import './SearchBoxInput.scss';

const api = createApiClient();

interface SearchInputProps {
  type?: string;
  placeholder?: string;
  onChange?: () => void;
  appVal?: { val; setVal };
}

const SearchInput: FC<SearchInputProps> = () => {
  const { state, dispatch } = useContext(TicketContext);
  const { checkedDateAfter, checkedDateBefore , afterDate, beforeDate} = state;
  let searchDebounce: any = null;

  const onSearch = async (val: string) => {
    clearTimeout(searchDebounce);
    dispatch(setSearchTerm(val));
    const beforeDateStr = checkedDateBefore ? `before:${beforeDate}` : '';
    const afterDateStr = checkedDateAfter ? `after:${afterDate}` : '';
    searchDebounce = setTimeout(async () => {
      const { tickets, totalLength } = await api.searchTickets(val, beforeDateStr, afterDateStr)
      dispatch(setTickets(tickets));
      dispatch(setTotalResults(totalLength))
    }, 300);
  };

  return (
    <header>
      <input
        className='searchbox'
        type='search'
        placeholder='Search...'
        onChange={(e) => onSearch(e.target.value)}
      />
    </header>
  );
};

export default SearchInput;
