import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import axios from "axios";

import NavBar from "./components/NavBar";
import Cover from "./components/Cover";
import About from "./components/About";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ListJams from "./components/jam/ListJams";
import JamDetails from "./components/jam/JamDetails";
import AddJam from "./components/jam/AddJam";
import EditJam from "./components/jam/EditJam";
import ProfileDetails from "./components/user/ProfileDetails";
import EditProfile from "./components/user/EditProfile";
import ListUsers from "./components/user/ListUsers";
import UserDetails from "./components/user/UserDetails";

import { LoggedUserProvider } from "./context/loggedUser";
import PrivateRoute from "./routes/PrivateRoute";

import Container from 'react-bootstrap/Container';

import styled from "styled-components";

const Styles = styled.div`
    .container-fluid {
        background: url(https://wharf850.com/wp-content/uploads/2019/04/bg-dk-blue-brick-wall.jpg) center no-repeat;
        background-size:cover;
        color: #FFFFFF;
        font-family: "DIN Condensed Bold";
    }
`;

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    async function checkLoggedIn() {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/isloggedin`,
        { withCredentials: true }
      );
      if (response.data.userName) {
        setLoggedInUser(response.data);
      }
    }
    checkLoggedIn();
  }, []);

  return (
    <Styles>
        <LoggedUserProvider value={loggedInUser}>
          <ToastContainer 
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            // theme={"colored"}
          />
          <Container fluid>
            <NavBar setLoggedInUser={setLoggedInUser} />
            <Switch>
              <Route exact path="/" component={Cover} />
              <Route exact path="/about" component={About} />
              {/* <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" render={() => {return <Login setLoggedInUser={setLoggedInUser} /> }} /> */}
              <Route exact path="/jams" component={ListJams} />
              <Route exact path="/jams/add" component={AddJam} />
              <Route exact path="/jams/:jamId" component={JamDetails} />
              <Route exact path="/jams/:jamId/edit" component={EditJam} />
              <Route exact path="/profile" component={ProfileDetails} />
              <Route exact path="/profile/edit" render={() => {return <EditProfile setLoggedInUser={setLoggedInUser} /> }} />
              <Route exact path="/users" component={ListUsers} />
              <Route exact path="/users/:userId" render={(props) => {return <UserDetails {...props} setLoggedInUser={setLoggedInUser} /> }} />
            </Switch>
            <Footer />
          </Container>
        </LoggedUserProvider>
    </Styles>
  );
}

export default App;