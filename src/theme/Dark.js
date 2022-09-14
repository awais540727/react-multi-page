import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';

const Dark = () => {
  const element = useRef();
  const [dark, setDark] = useState(false);

  const darkMode = () => {
    setDark(() => {
      element.current.style.backgroundColor = 'dark';
    });
  };
  return (
    <>
      <Button className="theme-btn" onClick={darkMode}>
        <div ref={element}>Dark Mod</div>
      </Button>
    </>
  );
};

export default Dark;
