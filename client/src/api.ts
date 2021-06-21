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
    getTickets: (page: number, val?: string) => Promise<Ticket[]>;
    searchTickets: (val: string) => Promise<Ticket[]>;
}

export const createApiClient = (): ApiClient => {
    return {
        getTickets: (page, string) => {
            const searchTerm = string ? string : null;
            return axios.get(APIRootPath + `?page=${page}&?search=${searchTerm}`).then((res) => res.data);
        },
        searchTickets: (val) => {
            console.log(val, 'hey')
            return axios.get(APIRootPath + `?search=${val}`).then((res) => res.data)
        }
    }
}

/*
export const searchTickets = (value: string): ApiClient2 => {
    return {
        searchTickets: () => {
            return axios.get(APIRootPath + `?search=${value}`).then((res) => res.data);
        }
    }
}
*/
