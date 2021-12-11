import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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
    <>
<Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Log In
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

            <Button type="submit">Log In</Button>
          </form>
          <p>
            Don't have an account? 
            <Button onClick={() => {props.setLoginShow(false); props.setSignupShow(true)}}>Sign Up</Button>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
