import axios from 'axios';
import {APIRootPath} from '@fed-exam/config';

export type Ticket = {
    id: string,
    title: string;
    content: string;
    creationTime: number;
    userEmail: string;
    labels?: string[];
}

export type ApiClient = {
    getTickets: (page?: number, val?: string) => Promise<Ticket[]>;
    searchTickets: (val: string) => Promise<Ticket[]>;
}

export const createApiClient = (): ApiClient => {
    return {
        getTickets: (page : number, value : string) => {
            const pageNumber = page ? page : 1;
            const searchTerm = value ? value : null;
            return axios.get(APIRootPath + `?page=${pageNumber}&?search=${searchTerm}`).then((res) => res.data);
        },
        searchTickets: (val : string) => {
            return axios.get(APIRootPath + `?search=${val}`).then((res) => res.data)
        }
    }
}