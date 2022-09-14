import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Home.css';
import Update from './Update';
import NewTodo from './NewTodo';
const formDataAdded = [];
const Home = () => {
  const [newFormAdder, setNewFormAdder] = useState(formDataAdded);
  const [del, setDel] = useState(false);
  const [serverData, setServerData] = useState([]);
  const navigate = useNavigate();
  const addTodo = () => {
    navigate('/create');
  };
  const updateTodo = (id) => {
    console.log(id);
    navigate(`/update/${id}`);
    setDel(true);
    setTimeout(() => {
      setDel(false);
    }, 3000);
    // Update(id);
  };
  // const deleteAll = () => {
  //   const deleteAllTodo = async () => {
  //     await axios
  //       .delete(`https://63052075697408f7edc2438e.mockapi.io/todo`)
  //       .then((res) => {
  //         console.log('Deleting All todo', res);
  //       })
  //       .catch((err) => console.log('error', err));
  //   };
  //   deleteAllTodo();
  //   setDel(true);
  //   setTimeout(() => {
  //     setDel(false);
  //   }, 3000);
  // };
  const deleteTodo = (id, e) => {
    axios
      .delete(`https://63052075697408f7edc2438e.mockapi.io/todo/${id}`)
      .then((res) => {
        console.log('Deleting data from server ', res);
      })
      .catch((error) => console.log(error));
    setDel(true);
    setTimeout(() => {
      setDel(false);
    }, 3000);
  };
  const click = (data) => {
    formDataAdded.push(data);

    /* Saving input data In a State */

    setNewFormAdder((defState) => {
      return { data, ...formDataAdded };
    });
  };
  useEffect(() => {
    axios
      .get(`https://63052075697408f7edc2438e.mockapi.io/todo`)
      .then((res) => {
        console.log('getting data from server ', res.data);
        setServerData(res.data);
      })
      .catch((error) => console.log(error));
  }, [del]);
  return (
    <>
      {/* {del && (
        <Card className="p-3 text-center bg success mt-2">
          <Row className="bg success">
            <h2>You are Deleting...</h2>
          </Row>
        </Card>
      )} */}

      <div className="container-fluid">
        <Row>
          <Col md="3 mt-4 bg-success text-center text-white rounded m-auto">
            <h3>CRUD APPLICATION</h3>
          </Col>
        </Row>
      </div>
      <Container className="container1">
        <Card className="p-2 bg-success">
          {/* <Row className="mb-2">
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
              <Button type="submit" onClick={addTodo}>
                Add TODO
              </Button>
            </Col>
          </Row> */}
          <div className="mb-4">
            <NewTodo formAdder={click} />
            {/* <Button onClick={deleteAll}>Delete All</Button> */}
          </div>
          {del && (
            <Card className="p-2 text-center text-white bg-secondary mt-2 rounded">
              <Row className="bg-danger m-auto rounded">
                <h2>You are Deleting...</h2>
              </Row>
            </Card>
          )}
          {serverData.map((value) => (
            <Card className="p-3 text-center mt-2">
              <Row className="text-center mt-2" key={value.id}>
                <Col>{value.firstName}</Col>
                <Col>{value.lastName}</Col>
                <Col>{value.number}</Col>
                <Col>
                  <Button
                    className="bg-success"
                    type="submit"
                    onClick={(e) => updateTodo(value.id, e)}
                  >
                    Update
                  </Button>
                </Col>
                <Col>
                  <Button
                    className="bg-danger"
                    type="submit"
                    onClick={(e) => deleteTodo(value.id, e)}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            </Card>
          ))}
        </Card>
      </Container>
      {/* {
        <div className="container">
          {formData.map((value) => (
            <div className="row mt-3 mb-3 information-container" key={value.id}>
              <div className="col-md-3">{value.firstName}</div>
              <div className="col-md-3">{value.lastName}</div>
              <div className="col-md-3">{value.number}</div>
            </div>
          ))}
        </div>
      } */}
    </>
  );
};

export default Home;
