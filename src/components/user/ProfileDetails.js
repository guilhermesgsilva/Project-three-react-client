import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { LoggedUserConsumer } from "../../context/loggedUser";

function ProfileDetails() {
    const loggedInUser = useContext(LoggedUserConsumer);


    return (
        <>
            {loggedInUser && 
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <img src={loggedInUser.userPicture} alt={loggedInUser.userName} />
                            <h2>{loggedInUser.userTitle}</h2>
                            <h4>@{loggedInUser.userName}</h4>
                            <p>{loggedInUser.userDescription}</p>
                        
                            <NavLink to={`/profile/edit`}>Edit Profile</NavLink>

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
                        
                            <h3>My Jams:</h3>
                            <ul>
                                {loggedInUser.userJams.slice(0).reverse().map((jam) => {
                                    return (
                                        <li key={jam._id}>
                                            <NavLink to={`/jams/${jam._id}`}>{jam.jamCity}</NavLink>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default ProfileDetails;