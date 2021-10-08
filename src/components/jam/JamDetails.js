import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { LoggedUserConsumer } from "../../context/loggedUser";


function JamDetails({match}) {
    const [jam, setJam] = useState({});
    const loggedInUser = useContext(LoggedUserConsumer);
    
    const history = useHistory();

    useEffect(() => {
        async function getJamDetails() {
          const response = await axios.get(
            `${process.env.REACT_APP_SERVER_HOSTNAME}/jams/${match.params.jamId}`
          );
          setJam(response.data);
        }

        getJamDetails();

    }, []);

    function showJoin(){
        let showJoin = true;
        jam.jamUsers.forEach((jamUser) => {
            if (jamUser._id === loggedInUser._id) {
                showJoin = false;
            }
        })
        return showJoin;
    }

    function showEdit(){
        let showEdit = true;
        if (jam.jamCreator._id !== loggedInUser._id) {
            showEdit = false;
        }
        return showEdit;
    }

    const handleJoinJam = async () => {
        const response = await axios.put(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/jams/${jam._id}/update-users`, null, { withCredentials: true}
        );
        setJam(response.data);
        toast.info("Jam Joined");
        history.push(`/jams/${jam._id}`);
    };

    return (
        <>
        {jam.jamCity ? (
            <>
                {jam.jamCreator && 
                    <div className="container-fluid background-color-light-blue">
                        <div className="row">
                            <div className="col-12 align-items-center">
                                <img className="img-jam" src={jam.jamPicture} alt="jam cover"/>
                                <p>City: {jam.jamCity}</p>
                                <p>Adress: {jam.jamAddress}</p>
                                <p>Date: {jam.jamDate}</p>
                                <p>Start Time: {jam.jamStartTime}</p>
                                <p>End Time: {jam.jamEndTime}</p>
                                <p>About: {jam.jamDescription}</p>
                                <h6>Created by:</h6>
                                <ul>
                                    <li key={jam.jamCreator._id}>
                                        <NavLink to={`/users/${jam.jamCreator._id}`}>{jam.jamCreator.userName}</NavLink>
                                    </li>
                                </ul>
                                <h6>Jam Users:</h6>
                                {jam.jamUsers && 
                                    <ul>
                                        {jam.jamUsers.map((user) => {
                                            return (
                                                <li key={user._id}>
                                                    <NavLink to={`/users/${user._id}`}>{user.userName}</NavLink>
                                                </li>
                                            );
                                        })}
                                    </ul> 
                                }
                                {showJoin() && <button onClick={() => handleJoinJam()}>Join</button>}
                                {showEdit() && <NavLink to={`/jams/${jam._id}/edit`}>Edit Jam</NavLink>}
                            </div>
                        </div>
                    </div>
                }
            </>
        ) : (<p className="loading">Loading...</p>)}
        </>
    );
};

export default JamDetails;