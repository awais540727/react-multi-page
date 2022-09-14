import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Create.css';
const Create = ({ onSave, onCancel }) => {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(true);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    number: '',
  });
  const firstNameHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setForm((defState) => {
      return { ...defState, firstName: e.target.value };
    });
  };
  const lastNameHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setForm((defState) => {
      return { ...defState, lastName: e.target.value };
    });
  };
  const numberHandler = (e) => {
    if (e.target.value.trim().length > 10) {
      setIsValid(true);
    }
    setForm((defState) => {
      return { ...defState, number: e.target.value };
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (form.firstName.trim().length == 0) {
      setIsValid(false);
      return;
    }
    if (form.lastName.trim().length == 0) {
      setIsValid(false);
      return;
    }
    if (form.number.trim().length == 0) {
      setIsValid(false);
      return;
    }
    const userInput = {
      firstName: form.firstName,
      lastName: form.lastName,
      number: form.number,
    };
    // onSave(userInput);
    onCancel();

    console.log('user Added ', userInput);
    let postdata = await axios.post(
      `https://63052075697408f7edc2438e.mockapi.io/todo`,
      userInput
    );
    console.log('postdata', postdata);
    // .then((res) => console.log('posting data', res))
    // .catch((error) => console.log(error));
  };

  return (
    <>
      <Container className="bg-secondary text-center text-white mt-3 rounded">
        <Form onSubmit={submitHandler}>
          <div className={`form_control ${!isValid ? 'invalid' : ''}`}>
            <label>
              Enter First Name
              <div className="mb-2">
                <input
                  className="rounded p-1"
                  type="text"
                  onChange={firstNameHandler}
                ></input>
              </div>
            </label>
          </div>
          <div className={`form_control ${!isValid ? 'invalid' : ''}`}>
            <label>
              Enter Last Name
              <div className="mb-2">
                <input
                  className="rounded p-1"
                  type="text"
                  onChange={lastNameHandler}
                ></input>
              </div>
            </label>
          </div>
          <div className={`form_control ${!isValid ? 'invalid' : ''}`}>
            <label>
              Enter Your Number
              <div className="mb-2">
                <input
                  className="rounded p-1"
                  type="text"
                  minLength="5"
                  maxLength="11"
                  onChange={numberHandler}
                ></input>
              </div>
            </label>
          </div>
          <div className="mb-2">
            <Button className="mb-3" type="submit">
              ADD TODO
            </Button>
            <Button
              className="mb-3 ms-3 bg-danger"
              onClick={onCancel}
              type="button"
            >
              Cancel
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Create;
