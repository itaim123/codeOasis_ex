import React from 'react';
import ClampLines from 'react-clamp-lines';

const TicketContent = ({content}) => (
    <div className='content'>
    <ClampLines
      text={content}
      id='clamp'
      lines={3}
      moreText='Show more...'
      lessText='Show Less...'
      className='expand_content'
      innerElement='div'
    />
    </div>
  );
export default TicketContent;