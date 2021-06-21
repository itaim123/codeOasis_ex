import React from 'react';
import { createApiClient, Ticket } from './api';

import Button from './components/UI/Button/Button';
import Tickets from './components/Tickets/Tickets';

import './App.scss';

export type AppState = {
  tickets?: Ticket[];
  search: string;
  page: number;
};

const api = createApiClient();

export class App extends React.PureComponent<{}, AppState> {
  state: AppState = {
    search: '',
    page: 1,
  };

  searchDebounce: any = null;

  async componentDidMount() {
    this.setState({
      tickets: await api.getTickets(this.state.page),
    });
  }

  changePage = async (pageNum: string) => {
    const page: number =
      pageNum === 'inc' ? this.state.page + 1 : this.state.page - 1;
    this.setState({
      page: page,
      tickets: await api.getTickets(page, this.state.search),
    });
  };

  onSearch = async (val: string) => {
    clearTimeout(this.searchDebounce);

    this.searchDebounce = setTimeout(async () => {
      this.setState({
        search: val,
        tickets: await api.searchTickets(val),
        page: 1,
      });
    }, 300);
  };

  render() {
    const { tickets, page } = this.state;
    // return (
    //     <main>
    //       <h1>Tickets List</h1>
    //       <header>
    //         <input
    //           type='search'
    //           placeholder='Search...'
    //           onChange={(e) => this.onSearch(e.target.value)}
    //         />
    //       </header>
    //       <Button onClick={() => this.changePage('inc')}>Increment</Button>
    //       {page !== 1 && (
    //         <Button onClick={() => this.changePage('dec')}>Decrement</Button>
    //       )}
    //       {tickets ? (
    //         <div className='results'>Showing {tickets.length} results</div>
    //       ) : null}
    //       {tickets ? (
    //         <Tickets tickets={this.state.tickets} />
    //       ) : (
    //         <h2>Loading..</h2>
    //       )}
    //     </main>
    // );
    return (<div>asdasd</div>)
  }
}

export default App;
