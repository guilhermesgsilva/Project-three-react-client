import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


function UserDetails({match}) {
    const [user, setUser] = useState({});

    useEffect(() => {
        async function getUserDetails() {
          const response = await axios.get(
            `${process.env.REACT_APP_SERVER_HOSTNAME}/users/${match.params.userId}`
          );
          setUser(response.data);
        }
        getUserDetails();
    }, []);


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <img src={user.userPicture} alt={user.userName} />
                        <p>{user.userTitle}</p>
                        <p>@{user.userName}</p>
                        <p>{user.userDescription}</p>

                        <button onClick={() => "handleFollow"(user._id)}>Follow</button>
                        <button onClick={() => "handleUnfollow"(user._id)}>Unfollow</button>

                        <p>Jams:</p>
                        {/* <ul>
                            {user.userJams.map((jam) => {
                                return (
                                    <li key={jam._id}>
                                        <NavLink to={`/jams/${jam._id}`}>{jam.jamCity}</NavLink>
                                    </li>
                                );
                            })}
                        </ul> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDetails;