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
        console.log(jam.jamCreator)
    }, []);

    const handleJoinJam = async (_id) => {
        console.log(loggedInUser)
        console.log(_id)
        await axios.put(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/jams/${_id}/update-users`, { withCredentials: true}
        );
        // setLoggedInUser(response.data);
        toast.info("Jam Joined");
        history.push(`/jams/${_id}`);
      };

    return (
        <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <img src={jam.jamPicture} alt="jam cover"/>
                            <p>Created by: </p>
                            {/* <p>{jam.jamCreator.userName}</p> */}
                            <p>City: {jam.jamCity}</p>
                            <p>Adress: {jam.jamAddress}</p>
                            <p>Date: {jam.jamDate}</p>
                            <p>Start Time: {jam.jamStartTime}</p>
                            <p>End Time: {jam.jamEndTime}</p>
                            <p>About: {jam.jamDescription}</p>
                            <p>Jam Users:</p>
                            {/* <ul>
                                {jam.jamUsers.map((user) => {
                                    return (
                                        <li key={user._id}>
                                            <NavLink to={`/users/${user._id}`}>{user.userName}</NavLink>
                                        </li>
                                    );
                                })}
                            </ul> */}
                            <button onClick={() => handleJoinJam(jam._id)}>Join</button>
                            <NavLink to={`/jams/${jam._id}/edit`}>Edit Jam</NavLink>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default JamDetails;