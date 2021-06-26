import React, { FC } from 'react';
import DateWithCB from '../UI/DateWithCB/DateWithCB';


import './DatePickers.scss';

const DatePickers:FC = () => {
    return (
        <div className="datePickers">
            <DateWithCB id='beforeDate' label='Check Before...' />
            <DateWithCB id='afterDate' label='Check After...' />
        </div>
    )
}

export default DatePickers;
