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
// import AddProject from "./components/project/AddProject";
// import EditProject from "./components/project/EditProject";
// import ListProjects from "./components/project/ListProjects";
// import ProjectDetails from "./components/project/ProjectDetails";
import ListJams from "./components/jam/ListJams";
import JamDetails from "./components/jam/JamDetails";
import AddJam from "./components/jam/AddJam";
import EditJam from "./components/jam/EditJam";
import ProfileDetails from "./components/user/ProfileDetails";
import EditProfile from "./components/user/EditProfile";
import UserDetails from "./components/user/UserDetails";


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
      <ToastContainer />
      <NavBar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
      <Switch>
        {/* <Route exact path={["/", "/projects"]} component={ListProjects} /> */}
        {/* <Route exact path="/projects/add" component={AddProject} /> */}
        {/* <Route exact path="/projects/:id" component={ProjectDetails} /> */}
        {/* <Route path="/projects/:id/edit" component={EditProject} /> */}
        <Route exact path={["/"]} component={Cover} />
        <Route exact path={["/about"]} component={About} />
        <Route path="/signup" component={Signup} />
        <Route
          path="/login"
          render={() => {
            return <Login setLoggedInUser={setLoggedInUser} />;
          }}
        />
        <Route exact path={["/jams"]} component={ListJams} />
        <Route exact path={["/jams/add"]} component={AddJam} />
        <Route exact path={["/jams/:jamId"]} component={JamDetails} />
        <Route exact path={["/jams/:jamId/edit"]} component={EditJam} />
        <Route 
          exact path={["/profile"]} 
          render={() => {
            return <ProfileDetails loggedInUser={loggedInUser} />;
          }}
        />
        <Route exact path={["/profile/edit"]} component={EditProfile} />
        <Route exact path={["/users/:userId"]} component={UserDetails} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

/*
<div className="container-fluid">
    <div className="row">
        <div className="col-12">

        </div>
    </div>
</div>
*/
