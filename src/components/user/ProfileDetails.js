import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, NavLink } from "react-router-dom";
import { toast } from "react-toastify";

function ProfileDetails({ loggedInUser, match }) {
    const [user, setUser] = useState({});
    const history = useHistory();
    
    // useEffect(() => {
    //     async function getUserDetails() {
    //         const response = await axios.get(
    //         `${process.env.REACT_APP_SERVER_HOSTNAME}/users/${match.params.id}`
    //         );
    //         setUser(response.data);
    //     }
    //     getUserDetails();
    // }, []);


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <img src={loggedInUser.userPicture} alt={loggedInUser.userName} />
                        <h2>{loggedInUser.userTitle}</h2>
                        <h4>@{loggedInUser.userName}</h4>
                        <p>{loggedInUser.userDescription}</p>
                    </div>
                    <div className="col-6">
                        <h3>Following:</h3>
                        <ul>
                            {loggedInUser.userFollows.map((user) => {
                                return (
                                    <li key={user._id}>
                                        <NavLink to={`/users/${user._id}`}>{user.userName}</NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileDetails;