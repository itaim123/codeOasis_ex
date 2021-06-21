import React from 'react';
import './Button.scss';

// type ButtonProps = {
//   onClick: (void | MouseEventHandler<HTMLDivElement>) => void;
//   type?: string;
// };

const Button = ({ children, onClick }) => (
  <div onClick={onClick} className='button'>
    {children}
  </div>
);

export default Button;
