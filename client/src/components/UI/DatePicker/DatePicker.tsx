import React, { FC, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { getTodayFormattedDate } from '../../../utils/utis';
import TicketContext from '../../../Context/TicketContext';
import { setDateBefore, setDateAfter } from '../../../Context/ticketReducer';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

interface DatePickerProps {
  id: string;
  label: string;
  checked?: boolean;
}

const DatePicker: FC<DatePickerProps> = ({ id, label, checked }) => {
  useEffect(() => {
    dispatch(setDateBefore(getTodayFormattedDate()));
    dispatch(setDateAfter(getTodayFormattedDate()));
  }, []);

  const ticketContext = useContext(TicketContext);
  const { state, dispatch } = ticketContext;
  const classes = useStyles();
  const onChangeDateHandler = e => {
    if(id === 'beforeDate'){
      dispatch(setDateAfter(e.target.value))
    } else if(id==='afterDate') {
      dispatch(setDateBefore(e.target.value))
    }
  }

  return (
    <form className={classes.container} noValidate>
      <TextField
        id={id}
        label={label}
        type='date'
        onChange={onChangeDateHandler}
        defaultValue={getTodayFormattedDate()}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
};

export default DatePicker;
