import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


function NavBar({ loggedInUser, setLoggedInUser }) {

  const logoutUser = async () => {
      await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/logout`, null, {
        withCredentials: true,
      });
      setLoggedInUser("");
      toast.success("User logged out");
  };

  return (
    <>
      <div className="container-fluid">
        <nav className="row">
          <div className="col-6">
            <ul className="nav">
              <li className="nav-item">
                <NavLink activeStyle={{ color: "red" }} className="nav-link" exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={{ color: "red" }} className="nav-link" exact to="/about">Learn More</NavLink>
              </li>
              {loggedInUser && (
                <>
                  <li className="nav-item">
                    <NavLink activeStyle={{ color: "red" }} className="nav-link" exact to="/jams">Jams</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeStyle={{ color: "red" }} className="nav-link" exact to="/jams/add">+</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="col-6">
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


