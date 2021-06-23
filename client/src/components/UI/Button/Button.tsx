import React from 'react';
import './Button.scss';

const Button = ({ children, onClick }) => (
  <div onClick={onClick} className='button'>
    {children}
  </div>
);

export default Button;
