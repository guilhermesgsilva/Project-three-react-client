import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Login({ setLoggedInUser }) {
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
        toast.success("Login success");
        setLoggedInUser(response.data); //Comes from the app component
        history.push("/profile");
      }
    } catch (e) {
      toast.error("Invalid login");
    }
  };

  return (
    <>
    <div className="container-fluid background-color-light-blue">
      <div className="row">
        <div className="col-12">
          <h2>Login</h2>
          <form onSubmit={handleFormSubmit}>
            <label>username</label>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              required
            />

            <label>password</label>
            <input
              type="password"
              onChange={(e) => setUserPassword(e.target.value)}
              value={userPassword}
              required
            />

            <button type="submit">Log In</button>
          </form>
          <p>Don't have an account? <NavLink to="/signup">Sign Up</NavLink></p>
        </div>
      </div>
    </div>
      
    </>
  );
}

export default Login;
