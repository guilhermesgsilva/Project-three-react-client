import { Switch, Route } from "react-router-dom";
import "./App.css";
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
    <>
        <LoggedUserProvider value={loggedInUser}>
      <ToastContainer />
          <NavBar setLoggedInUser={setLoggedInUser} />
          <Switch>
            <Route exact path="/" component={Cover} />
            <Route exact path="/about" component={About} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" render={() => {return <Login setLoggedInUser={setLoggedInUser} /> }} />
            <PrivateRoute exact path="/jams" component={ListJams} />
            <Route exact path="/jams/add" component={AddJam} />
            <PrivateRoute exact path="/jams/:jamId" component={JamDetails} />
            {/* <Route exact path="/jams/:jamId" render={() => {return <JamDetails setLoggedInUser={setLoggedInUser} /> }} /> */}
            <Route exact path="/jams/:jamId/edit" component={EditJam} />
            <PrivateRoute exact path="/profile" component={ProfileDetails} />
            <Route exact path="/profile/edit" render={() => {return <EditProfile setLoggedInUser={setLoggedInUser} /> }} />
            <Route exact path="/users" component={ListUsers} />
            <Route exact path="/users/:userId" component={UserDetails} />
          </Switch>
          <Footer />
        </LoggedUserProvider>
    </>
  );
}

export default App;