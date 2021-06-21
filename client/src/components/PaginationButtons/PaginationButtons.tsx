import React from 'react';
import Button from '../UI/Button/Button';

const PaginationButtons = ({ tickets, onClick, page }) => {
  return (
    <>  
      <Button onClick={onClick}>Increment</Button>
      {page !== 1 && (
        <Button onClick={onClick}>Decrement</Button>
      )}
    </>
  );
};
