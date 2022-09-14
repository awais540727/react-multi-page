import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Form, Row, Button, Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './Create.css';
const Update = () => {
  const [update, setUpdate] = useState(false);
  const { id } = useParams();
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();
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
  useEffect(() => {
    axios
      .get(`https://63052075697408f7edc2438e.mockapi.io/todo/${id}`)
      .then((res) => {
        console.log('getting data from server in update ', res.data);
        // console.log('form data ', form);
        setForm(res.data);
        // console.log('form data ', form);
        //   setServerData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  //   useEffect(() => {
  //     // PUT request using axios inside useEffect React hook

  //     // empty dependency array means this effect will only run once (like componentDidMount in classes)
  //   }, []);

  const submitHandler = (e) => {
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

    // axios
    //   .put(`https://63052075697408f7edc2438e.mockapi.io/todo` + id)
    //   .then((res) => {
    //     setServerData((defState) => {
    //       return {
    //         ...defState,
    //         number: form.number,
    //         firstName: form.firstName,
    //         lastName: form.lastName,
    //       };
    //     });
    //   })
    //   .catch((error) => console.log(error));
    axios
      .put(`https://63052075697408f7edc2438e.mockapi.io/todo/${id}`, form)
      .then((res) => {
        console.log('form data posting', form);
        // // setServerData(res.data);
        // console.log('setting id data in server from State ', serverData);
      })
      .catch((error) => console.log(error));
    setUpdate(true);
    setTimeout(() => {
      setUpdate(false);
      navigate('/');
    }, 3000);
    //     axios
    //       .post(`https://63052075697408f7edc2438e.mockapi.io/todo`, {
    //         firstName: form.firstName,
    //         lastName: form.lastName,
    //         number: form.number,
    //       })
    //       .then((res) => console.log('posting data', res))
    //       .catch((error) => console.log(error));
  };

  return (
    <>
      {update && (
        <Card className="p-2 text-center text-white mt-2 rounded">
          <Row className="bg-success m-auto rounded">
            <h2>Data Updating...</h2>
          </Row>
        </Card>
      )}
      <Container className="bg-secondary text-center text-white mt-3 mb-3 rounded">
        <Form onSubmit={submitHandler}>
          <div className={`form_control ${!isValid ? 'invalid' : ''}`}>
            <label>
              Enter First Name
              <div className="mb-2">
                <input
                  className="rounded p-1"
                  type="text"
                  value={form.firstName}
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
                  defaultValue={form.lastName}
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
                  value={form.number}
                  onChange={numberHandler}
                ></input>
              </div>
            </label>
          </div>
          <div className="mb-2">
            <Button className="mb-3" type="submit">
              Update TODO
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};
export default Update;
