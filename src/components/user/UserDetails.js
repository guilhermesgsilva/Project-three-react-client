import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { LoggedUserConsumer } from "../../context/loggedUser";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";




function UserDetails({match}) {
    const [user, setUser] = useState({});
    const loggedInUser = useContext(LoggedUserConsumer);

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

    const handleFollow = async () => {
        await axios.put(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/users/${user._id}/follow`, null, { withCredentials: true}
        );
        toast.info("User Followed");
        history.push(`/users/${user._id}`);
    };

    const handleUnfollow = async () => {
        await axios.put(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/users/${user._id}/unfollow`, null, { withCredentials: true}
        );
        toast.info("User Unfollowed");
        history.push(`/users/${user._id}`);
    };


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <img src={user.userPicture} alt={user.userName} />
                        <p>{user.userTitle}</p>
                        <p>@{user.userName}</p>
                        <p>{user.userDescription}</p>

                        <button onClick={() => handleFollow(user._id)}>Follow</button>
                        <button onClick={() => handleUnfollow(user._id)}>Unfollow</button>

                        <p>Jams:</p>
                        {user.userJamsCreated &&
                        <ul>
                            {user.userJamsCreated.map((jam) => {
                                return (
                                    <li key={jam._id}>
                                        <NavLink to={`/jams/${jam._id}`}>{jam.jamCity}</NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDetails;