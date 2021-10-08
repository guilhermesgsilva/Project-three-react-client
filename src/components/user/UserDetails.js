import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { LoggedUserConsumer } from "../../context/loggedUser";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function UserDetails({ match }) {
  const [user, setUser] = useState({});
  const loggedInUser = useContext(LoggedUserConsumer);
  console.log(loggedInUser.userFollows);

  const history = useHistory();

  useEffect(() => {
    async function getUserDetails() {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/users/${match.params.userId}`
      );
      setUser(response.data);
    }
    getUserDetails();
  }, []);

  function showFollow() {
    let showFollow = true;
    if (loggedInUser) {
      loggedInUser.userFollows.forEach((userFollow) => {
        if (user._id === userFollow._id) {
          showFollow = false;
        }
      });
    }
    return showFollow;
  }

  function showButton() {
    let showButton = true;
    if (loggedInUser) {
        if (user._id === loggedInUser._id) {
            showButton = false;
        }
    }
    return showButton;
  }
  

  const handleFollow = async () => {
    const response = await axios.put(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/users/${user._id}/follow`,
      null,
      { withCredentials: true }
    );
    
    toast.info("User Followed");
    history.push(`/users/${user._id}`);
  };

  const handleUnfollow = async () => {
    const response = await axios.put(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/users/${user._id}/unfollow`,
      null,
      { withCredentials: true }
    );
    
    toast.info("User Unfollowed");
    history.push(`/users/${user._id}`);
  };

  return (
    <>
      {user.userName ? (
        <div className="container-fluid background-color-light-blue">
          <div className="row">
            <div className="col-12">
              <img src={user.userPicture} alt={user.userName} />
              <p>{user.userTitle}</p>
              <p>@{user.userName}</p>
              <p>{user.userDescription}</p>

              {showButton() && (
                  <>
                      {showFollow() ? (
                      <button onClick={() => handleFollow(user._id)}>Follow</button>
                      ) : (
                      <button onClick={() => handleUnfollow(user._id)}>Unfollow</button>
                      )}
                  </>
              )}
              

              <p>Jams:</p>
                  {user.userJamsCreated && (
                    <ul>
                      {user.userJamsCreated.map((jam) => {
                        return (
                          <li key={jam._id}>
                            <NavLink to={`/jams/${jam._id}`}>{jam.jamCity}</NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  )}
            </div>
          </div>
        </div>
      ) : (<p className="loading">Loading...</p>)}
    </>
  );
}

export default UserDetails;
