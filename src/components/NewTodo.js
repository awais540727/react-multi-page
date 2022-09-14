import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Create from './Create';

const NewTodo = ({ formAdder }) => {
  const [show, setShow] = useState(false);
  const addNew = (data) => {
    const newData = data;
    formAdder(newData);
  };
  const display = () => {
    setShow(true);
  };
  const hideForm = () => {
    setShow(false);
  };
  return (
    <>
      <div className="text-center mt-2 justify-content-center align-content-center">
        {show && <Create onSave={addNew} onCancel={hideForm} />}
        <Button type="submit" onClick={display}>
          Add New TODO
        </Button>
      </div>
    </>
  );
};

export default NewTodo;
