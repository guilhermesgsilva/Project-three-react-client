import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Signup() {
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
      await axios.post(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/signup`,
        body
      );
      toast.info("Signup success");
      history.push("/login");
    } catch (e) {
      toast.info(e.response.data.message);
    }
  };

  return (
    <>
      <div className="container-fluid background-color-light-blue">
        <div className="row ">
          <div className="col-12 align-items-center">
            <h2>Sign Up</h2>
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

              <button type="submit">Sign Up</button>
            </form>
            <p>
              Already have an account? <NavLink to="/login">Log In</NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
