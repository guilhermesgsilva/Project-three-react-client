import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { LoggedUserConsumer } from "../context/loggedUser";
import logo from "../assets/jam-session-logo.png"

import Signup from "./Signup";
import Login from "./Login";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

import { BsList } from 'react-icons/bs';

import styled from "styled-components";

const Styles = styled.div`
  .row {
    background-color: rgba(255,255,255,0.1);
    color: #FFFFFF;
  }

  .col {
    display: flex;
    align-items: center;
    min-height: 10vh;
  }

  img {
    height: 50px;
  }

  img:hover {
    border: 1px solid #F2BB15;
  }

  img:active {
    background-color: #F2BB15;
  }

  .dropdown-toggle:after {
    display: none; 
  }

  .nav-btn {
    border: none;
    background-color: rgba(0,0,0,0);
  }

  .nav-btn:hover {
    border: none;
    color: #F2BB15;
  }

  .nav-btn:active {
    border: none;
    background-color: #F2BB15;
    color: #000000;
  }

  .nav-btn:focus {
    border: none;
    box-shadow: none;
    background-color: #000000;
  }

  #justify-content-center {
    justify-content: center;
  }

  #justify-content-end {
    justify-content: end;
  }

  .dropdown-menu {
    background-color: #FFFFFF;
    border: 1px solid #5A5A5A;
  }

  .dropdown-divider { 
    color: #5A5A5A;
  }

  .dropdown-item {
    color: #000000;
  }

  .dropdown-item.active .dropdown-item.active {
    color: #000000;
    background-color: #FFFFFF;
  }
  
  .dropdown-item:hover {
    color: #FFFFFF;
    background-color: #000000;
  }
  
`;

function NavBar({ setLoggedInUser }) {
  const loggedInUser = useContext(LoggedUserConsumer);
  const [signupShow, setSignupShow] = React.useState(false);
  const [loginShow, setLoginShow] = React.useState(false);
  
  const history = useHistory();

  const logoutUser = async () => {
      await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/logout`, null, {
        withCredentials: true,
      });
      setLoggedInUser("");
      history.push("/");
      setLoginShow(false);
      toast.info("User logged out");
  };

  return (
    <Styles>
      <Row>
        <Col>
          <Nav as="ul">
            <Dropdown value="Connect">
              <Dropdown.Toggle className="nav-btn" >
                <BsList  />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item><NavLink className="dropdown-item" exact to="/">Home</NavLink></Dropdown.Item>
                <Dropdown.Item><NavLink className="dropdown-item" exact to="/about">About</NavLink></Dropdown.Item>
                {loggedInUser &&
                  <>
                    <Dropdown.Divider />
                    <Dropdown.Item><NavLink className="dropdown-item" exact to="/profile">Profile</NavLink></Dropdown.Item>
                    <Dropdown.Item><NavLink className="dropdown-item" exact to="/jams">Jams</NavLink></Dropdown.Item>
                    <Dropdown.Item><NavLink className="dropdown-item" exact to="/jams/add">Add Jam</NavLink></Dropdown.Item>
                    <Dropdown.Item><NavLink className="dropdown-item" exact to="/users">Users</NavLink></Dropdown.Item>
                  </>
                }
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Col>
        <Col id="justify-content-center">
          <Nav as="ul">
            <Nav.Item as="li">
              <NavLink exact to="/"><Image src={logo} roundedCircle /></NavLink>
            </Nav.Item>
          </Nav>
        </Col>
        <Col id="justify-content-end">
          <Nav as="ul">
            {loggedInUser ? (                
              <Nav.Item as="li">
                <Button className="nav-btn" onClick={logoutUser}>Log Out</Button>
              </Nav.Item>
            ) : (
              <>
                <Nav.Item as="li">
                  <Button className="nav-btn" onClick={() => setSignupShow(true)}>
                    Sign Up
                  </Button>
                </Nav.Item>
                  <Signup
                    show={signupShow}
                    onHide={() => setSignupShow(false)}
                    setSignupShow={setSignupShow}
                    setLoginShow={setLoginShow}
                  />
                <Nav.Item as="li">
                  <Button className="nav-btn" onClick={() => setLoginShow(true)}>
                    Log In
                  </Button>
                </Nav.Item>
                  <Login
                    show={loginShow}
                    onHide={() => setLoginShow(false)}
                    setLoggedInUser={setLoggedInUser}
                    setLoginShow={setLoginShow}
                    setSignupShow={setSignupShow}
                  />
              </>
            )}
          </Nav>
        </Col>
      </Row>
    </Styles>
  )
}

export default NavBar;