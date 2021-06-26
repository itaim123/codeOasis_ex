import axios from 'axios';
import { APIRootPath } from '@fed-exam/config';

export type Ticket = {
  id: string;
  title: string;
  content: string;
  creationTime: number;
  userEmail: string;
  labels?: string[];
};

interface ResponseType {
  tickets: Ticket[];
  totalLength: number
}

export type ApiClient = {
  getTickets: (page?: number | undefined, val?: string) => Promise<ResponseType>;
  searchTickets: (
    val: string,
    beforeDate?: string,
    afterDate?: string
  ) => Promise<ResponseType>;
};

export const createApiClient = (): ApiClient => {
  return {
    getTickets: (page, value) => {
      const pageNumber = page ? page : 1;
      const searchTerm = value ? value : '';
      return axios
        .get(APIRootPath + `?page=${pageNumber}&search=${searchTerm}`)
        .then((res) => res.data);
    },
    searchTickets: (val: string, dateBefore?: string, dateAfter?: string) => {
      const searchQuery = val ? `?search=${val}` : '';
      const dateBeforeQuery = dateBefore ? `&dBefore=${dateBefore}` : '';
      const dateAfterQuery = dateAfter ? `&dAfter=${dateAfter}` : '';
      return axios.get(APIRootPath + searchQuery + dateBeforeQuery + dateAfterQuery).then((res) => res.data);
    },
  };
};
