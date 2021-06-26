import React, { FC, useState, useContext, useEffect } from 'react';
import TicketContext from '../../../Context/TicketContext';
import { checkedDateBefore, checkedDateAfter } from '../../../Context/ticketReducer';
import CheckboxComponent from '../CheckBox/CheckBox';
import DatePicker from '../DatePicker/DatePicker';

import './DateWithCB.scss';

interface DateWithCBProps {
  id: string;
  label: string;
}

const DateWithCB: FC<DateWithCBProps> = ({ id, label }) => {
  const [checked, setChecked] = useState(false);
  const ticketContext = useContext(TicketContext);
  const { dispatch } = ticketContext;

  useEffect(()=>{
    if(id==='beforeDate'){
      dispatch(checkedDateBefore(checked))
    } else if (id==='afterDate'){
      dispatch(checkedDateAfter(checked))
    }
  }, [checked, id, dispatch])
  return (
    <div className='datePickerWithCB'>
      <CheckboxComponent checked={checked} setChecked={setChecked} />
      <DatePicker id={id} label={label} checked={checked} />
    </div>
  );
};
export default DateWithCB;
