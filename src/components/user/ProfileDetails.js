import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { LoggedUserConsumer } from "../../context/loggedUser";
import axios from "axios";

function ProfileDetails() {
    const [user, setUser] = useState({})
    const loggedInUser = useContext(LoggedUserConsumer);

    useEffect(()=> {
        async function getUser () {
            const response = await axios.get(
                `${process.env.REACT_APP_SERVER_HOSTNAME}/users/${loggedInUser._id}`
            );
            setUser(response.data);
        }
        getUser()
    }, [])

    return (
        <>
            {user.userName ? (
                <>
                    {user && 
                        <div className="row background-color-light-blue">
                            <div className="col-12 align-items-center">
                                <img className="img-profile" src={user.userPicture} alt={user.userName} />
                                <h2>{user.userTitle}</h2>
                                <h4>@{user.userName}</h4>
                                <p>{user.userDescription}</p>
                            
                                <NavLink to={`/profile/edit`}>Edit Profile</NavLink>

                                <h6>Following:</h6>
                                {user.userFollows &&
                                <ul>
                                    {user.userFollows.map((user) => {
                                        return (
                                            <li key={user._id}>
                                                <NavLink to={`/users/${user._id}`}>{user.userName}</NavLink>
                                            </li>
                                        );
                                    })}
                                </ul>
                                }
                                <h6>Jams Attending:</h6>
                                {user.userJams &&
                                <ul>
                                    {user.userJams.slice(0).reverse().map((jam) => {
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
                    }
                </>
            ) : (<p className="loading">Loading...</p>)}
        </>
    );
};

export default ProfileDetails;