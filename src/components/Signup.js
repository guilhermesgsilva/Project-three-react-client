import React, { useState } from "react";
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

  #signup {
    float: right;
    color: #000000;
    background-color: #F2BB15;
    border: 1px solid #F2BB15;
  }

  #signup:hover {
    color: #F2BB15;
    background-color: #000000;
    border: 1px solid #F2BB15;
  }

  #signup:focus {
    box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 0%);
  }

  #login {
    padding: 0;
    color: #FFFFFF;
    border: none;
    background-color: rgba(0,0,0,0);
    line-height: 0;
    padding-left: 0.25rem;
    text-decoration: underline;
  }

  #login:hover {
    color: #F2BB15;
  }

`;

function Signup(props) {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const body = {
      userName,
      userPassword,
    };

    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/signup`,
        body
      );
      props.setSignupShow(false);
      props.setLoginShow(true);
      toast.info("Signup success");
    } catch (e) {
      toast.info(e.response.data.message);
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
            Sign Up
          </Modal.Title>
          <Button id="close" onClick={() => {props.setSignupShow(false)}}>
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
            <Button id="signup" type="submit">
              Sign Up
            </Button>
          </Form>
          <p>
            Already have an account?
            <Button id="login" onClick={() => {props.setSignupShow(false); props.setLoginShow(true)}}>Log In</Button>
          </p>
        </Modal.Body>
      </Styles>
    </Modal>
  );
}

export default Signup;
