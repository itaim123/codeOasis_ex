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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ticketContext = useContext(TicketContext);
  const { dispatch } = ticketContext;
  const classes = useStyles();

  const onChangeDateHandler = (e) => {
    if (id === 'beforeDate') {
      dispatch(setDateBefore(e.target.value));
    } else if (id === 'afterDate') {
      dispatch(setDateAfter(e.target.value));
    }
  };
  return (
    <form className={classes.container} noValidate>
      <TextField
        id={id}
        disabled={!checked}
        label={label}
        type='date'
        onChange={onChangeDateHandler}
        defaultValue={getTodayFormattedDate().split('/').reverse().join('-')}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
};

export default DatePicker;
