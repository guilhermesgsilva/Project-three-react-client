import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Sign Up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleFormSubmit}>
            <label>username</label>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              required
            />
            <br/>

            <label>password</label>
            <input
              type="password"
              onChange={(e) => setUserPassword(e.target.value)}
              value={userPassword}
              required
            />
            <br/>

            <Button type="submit">Sign Up</Button>
          </form>
          <p>
            Already have an account?
            <Button onClick={() => {props.setSignupShow(false); props.setLoginShow(true)}}>Log In</Button>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Signup;
