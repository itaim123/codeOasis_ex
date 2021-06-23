import React, { FC, useReducer } from 'react';
import { ticketReducer } from './ticketReducer';
import TicketContext from './TicketContext';

export interface TicketStateInterface {
    tickets: Ticket[];
    page: number;
}

export type Ticket = {
    id: string,
    title: string;
    content: string;
    creationTime: number;
    userEmail: string;
    labels?: string[];
}

export interface TicketStateProps {
    // children: JSX.Element[] | JSX.Element
    children: React.ReactNode
}

export const initialTicketState: TicketStateInterface = {
    tickets: [],
    page: 1,
};

export const TicketState : FC<TicketStateProps> = props => {
    const [state, dispatch] = useReducer(ticketReducer, initialTicketState)
    return (
        <TicketContext.Provider value={{
            state,
            dispatch
        }}>
            {props.children}
        </TicketContext.Provider>
    )
}
