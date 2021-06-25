import React, { FC, useContext } from 'react';
import { createApiClient } from '../../../api';
import { setTickets, setSearchTerm } from '../../../Context/ticketReducer';
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
  const { dispatch } = useContext(TicketContext);
  let searchDebounce: any = null;

  const onSearch = async (val: string) => {
    clearTimeout(searchDebounce);
    dispatch(setSearchTerm(val));
    searchDebounce = setTimeout(async () => {
      const ticketsData = await api.searchTickets(val);
      dispatch(setTickets(ticketsData));
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
