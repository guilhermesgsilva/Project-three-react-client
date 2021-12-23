import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { AiOutlineClose } from 'react-icons/ai';

import styled from "styled-components";

const Styles = styled.div`

  {
    border: 1px solid #F2BB15;
    border-radius: 0.25rem;
    color: #FFFFFF;
    background-color: #000000;
    font-family: "DIN Condensed Bold";
  }

  .modal-header {
    border-bottom: 1px solid #F2BB15;
    color: #F2BB15;
  }

  #close {
    border: none;
    background-color: rgba(0,0,0,0);
  }

  #close:hover {
    color: #F2BB15;
  }

  #close:focus {
    background-color: rgba(0,0,0,0);
    box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 0%);
  }

  .form-control {
    border: 0;
  }

  .form-control:focus {
    border: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 0%);
  }

  p {
    font-family: "GillSans";
    padding: 0.375rem 0;
    margin-bottom: 0;
  }

  #login {
    float: right;
    color: #000000;
    background-color: #F2BB15;
    border: 1px solid #F2BB15;
  }

  #login:hover {
    color: #F2BB15;
    background-color: #000000;
    border: 1px solid #F2BB15;
  }

  #login:focus {
    box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 0%);
  }

  #signup {
    padding: 0;
    color: #FFFFFF;
    border: none;
    background-color: rgba(0,0,0,0);
    line-height: 0;
    padding-left: 0.25rem;
    text-decoration: underline;
  }

  #signup:hover {
    color: #F2BB15;
  }

`;

function Login(props) {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const history = useHistory();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const body = {
      userName,
      userPassword,
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/login`,
        body,
        { withCredentials: true }
      );
      if (response.data.userName) {
        toast.info("Login success");
        props.setLoggedInUser(response.data); //Comes from the app component
        history.push("/profile");
      }
    } catch (e) {
      toast.info("Invalid login");
    }
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Styles>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            LOG IN
          </Modal.Title>
          <Button id="close" onClick={() => {props.setLoginShow(false)}}>
            <AiOutlineClose/>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextUsername">
              <Form.Label column sm="2">
                Username
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="password"
                  onChange={(e) => setUserPassword(e.target.value)}
                  value={userPassword}
                  required
                />
              </Col>
            </Form.Group>
            <Button id="login" type="submit">
              Log In
            </Button>
          </Form>
          <p>
            Don't have an account? 
            <Button id="signup" onClick={() => {props.setLoginShow(false); props.setSignupShow(true)}}>Sign Up</Button>
          </p>
        </Modal.Body>
      </Styles>
    </Modal>
  );
}

export default Login;