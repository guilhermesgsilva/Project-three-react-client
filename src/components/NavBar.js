import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { LoggedUserConsumer } from "../context/loggedUser";


function NavBar({ setLoggedInUser }) {
  const loggedInUser = useContext(LoggedUserConsumer);

  const logoutUser = async () => {
      await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/logout`, null, {
        withCredentials: true,
      });
      setLoggedInUser("");
      toast.success("User logged out");
  };

  return (
    <>
      <div className="container-fluid nav-bar">
        <nav className="row">
          <div className="col-4">
            <ul className="nav">
              <li className="nav-item">
                <NavLink activeStyle={{ color: "red" }} className="nav-link" exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={{ color: "red" }} className="nav-link" exact to="/about">About</NavLink>
              </li>
              {loggedInUser && (
                  <>
                    <li className="nav-item">
                      <NavLink activeStyle={{ color: "red" }} className="nav-link" exact to="/jams">Jams</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeStyle={{ color: "red" }} className="nav-link" exact to="/jams/add">+</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeStyle={{ color: "red" }} className="nav-link" exact to="/users">Users</NavLink>
                    </li>
                  </>
                )}
            </ul>
          </div>
          <div className="col-4">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                
              </li>
            </ul>
          </div>
          <div className="col-4">
            <ul className="nav justify-content-end">
              {loggedInUser ? (
                <>
                  <li className="nav-item">
                    <NavLink activeStyle={{ color: "red" }} className="nav-link" exact to="/profile">Profile</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" exact to="/">
                      <button onClick={logoutUser}>Log Out</button>
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink activeStyle={{ color: "red" }} className="nav-link" exact to="/signup">Sign Up</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeStyle={{ color: "red" }} className="nav-link" exact to="/login">Log In</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavBar;


