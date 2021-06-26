import React from 'react';
import './Button.scss';

// interface ButtonProps {
//   onClick: ()=>void;
//   disabled?: boolean
// }

const Button= ({ children, onClick }) => (
  <div onClick={onClick} className='button'>
    {children}
  </div>
);

export default Button;
