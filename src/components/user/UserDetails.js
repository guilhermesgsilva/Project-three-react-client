import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { LoggedUserConsumer } from "../../context/loggedUser";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function UserDetails({ match, setLoggedInUser }) {
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
        } else {
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
    setLoggedInUser(response.data);
    toast.info("User Followed");
    history.push(`/users/${user._id}`);
  };

  const handleUnfollow = async () => {
    const response = await axios.put(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/users/${user._id}/unfollow`,
      null,
      { withCredentials: true }
    );
    setLoggedInUser(response.data);
    toast.info("User Unfollowed");
    history.push(`/users/${user._id}`);
  };

  return (
    <>
      {user.userName ? (
        <div className="row background-color-light-blue">
          <div className="col-12 align-items-center">
            <img className="img-profile" src={user.userPicture} alt={user.userName} />
            <h2>{user.userTitle}</h2>
            <h4>@{user.userName}</h4>
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
            

            <h6>Jams Created:</h6>
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
      ) : (<p className="loading">Loading...</p>)}
    </>
  );
}

export default UserDetails;
