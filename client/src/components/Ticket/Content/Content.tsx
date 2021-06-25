import React, { FC, useRef, useEffect, useState } from 'react';

import Button from '../../UI/Button/Button';
import './Content.scss';

interface ContentProps {
  content: string;
}

const Content: FC<ContentProps> = ({ content }) => {
  const [showContent, setShowContent] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const { scrollHeight, clientHeight } = ref.current;
    if (scrollHeight > clientHeight) {
      setIsClamped(true);
    }
  }, []);

  const toggleShowContent = () => setShowContent((show) => !show);

  const style = {
    display: showContent ? 'block' : '-webkit-box',
  };

  return (
    <>
      <div ref={ref} className='content' style={style}>
        {content}
      </div>
      {isClamped && (
        <div className='clamper'>
          {showContent ? (
            <Button onClick={toggleShowContent}>Show Less...</Button>
          ) : (
            <Button onClick={toggleShowContent}>Show More...</Button>
          )}
        </div>
      )}
    </>
  );
};

export default Content;
