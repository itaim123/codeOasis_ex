import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';



const CheckboxComponent = ({ checked, setChecked }) => {
//   const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      defaultChecked
      color='primary'
      inputProps={{ 'aria-label': 'secondary checkbox' }}
    />
  );
};

export default CheckboxComponent;
