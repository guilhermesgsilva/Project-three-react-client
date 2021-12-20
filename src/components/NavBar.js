import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { LoggedUserConsumer } from "../context/loggedUser";
import logo from "../assets/jam-session-logo.png"

import Radio from "./Radio";
import Signup from "./Signup";
import Login from "./Login";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
    min-height: 10vh;
  }

  .nav {
    align-items: center;
  }

  img {
    height: 3em;
  }

  img:hover {
    border: 1px solid #F2BB15;
  }

  .dropdown-toggle:after {
    display: none; 
  }
  
  .drop-btn {
    border: none;
    background-color: rgba(0,0,0,0);
  }

  .drop-btn:focus {
    background-color: rgba(0,0,0,0);
    box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 0%);
  }

  .show>.btn-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 0%);
  }

  ${'' /* .show>.btn-primary.dropdown-toggle:focus img {
    border: 1px solid #F2BB15;
  } */}

  .dropdown-menu {
    background-color: rgba(255,255,255,0.1);
    border: 1px solid #F2BB15;
    transform: translate3d(0px, 12vh, 0px) !important;
  }

  .dropdown-divider { 
    color: #F2BB15;
  }

  .dropdown-item {
    color: #FFFFFF;
  }

  .dropdown-item.active {
    color: #F2BB15;
    background-color: rgba(0,0,0,0);
  }
  
  .dropdown-item:hover {
    color: #F2BB15;
    background-color: rgba(0,0,0,0);
  }

  .btn:focus {
    box-shadow: 0 0 0 0.25rem rgb(49 132 253 / 0%);
  }

  #logo-text {
    font-family: "Caveat";
    font-size: 2rem;
    color: #F2BB15;
    margin-bottom: 0;
  }

  #justify-content-end {
    justify-content: end;
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
          <Nav>
            <Dropdown value="Connect">
              <Dropdown.Toggle className="drop-btn" >
                <Image src={logo} roundedCircle />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item><NavLink className="dropdown-item" exact to="/">Home</NavLink></Dropdown.Item>
                <Dropdown.Item><NavLink className="dropdown-item" exact to="/about">About</NavLink></Dropdown.Item>
                {loggedInUser ? (
                  <>
                    <Dropdown.Divider />
                    <Dropdown.Item><NavLink className="dropdown-item" exact to="/profile">Profile</NavLink></Dropdown.Item>
                    <Dropdown.Item><NavLink className="dropdown-item" exact to="/jams">Jams</NavLink></Dropdown.Item>
                    <Dropdown.Item><NavLink className="dropdown-item" exact to="/jams/add">Add Jam</NavLink></Dropdown.Item>
                    <Dropdown.Item><NavLink className="dropdown-item" exact to="/users">Users</NavLink></Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                      <Button className="dropdown-item" onClick={logoutUser}>Log Out</Button>
                    </Dropdown.Item>
                  </>
                ) : (
                  <>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                      <Button className="dropdown-item" onClick={() => setSignupShow(true)}>Sign Up</Button>
                    </Dropdown.Item>
                      <Signup
                        show={signupShow}
                        onHide={() => setSignupShow(false)}
                        setSignupShow={setSignupShow}
                        setLoginShow={setLoginShow}
                      />
                    <Dropdown.Item>
                      <Button className="dropdown-item" onClick={() => setLoginShow(true)}>Log In</Button>
                    </Dropdown.Item>
                      <Login
                        show={loginShow}
                        onHide={() => setLoginShow(false)}
                        setLoggedInUser={setLoggedInUser}
                        setLoginShow={setLoginShow}
                        setSignupShow={setSignupShow}
                      />
                  </>
                )}
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Item>
              <p id="logo-text">Jam Session</p>
            </Nav.Item>
          </Nav>
        </Col>
        <Col id="justify-content-end">
          <Nav>
            <Nav.Item>
              <Radio />
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Styles>
  )
}

export default NavBar;