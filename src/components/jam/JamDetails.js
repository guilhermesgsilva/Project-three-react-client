import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { LoggedUserConsumer } from "../../context/loggedUser";


function JamDetails({match}) {
    const [jam, setJam] = useState({});
    const loggedInUser = useContext(LoggedUserConsumer);
    const [showJoin, setShowJoin] = useState(true);

    const history = useHistory();

    useEffect(() => {
        async function getJamDetails() {
          const response = await axios.get(
            `${process.env.REACT_APP_SERVER_HOSTNAME}/jams/${match.params.jamId}`
          );
          setJam(response.data);
        }

        // async function toggleShowJoin(){
        //     if (jam.jamUsers) {
        //     jam.jamUsers.map((user) => {
        //         if (user._id === loggedInUser._id) {
        //             return setShowJoin(!showJoin);
        //         } else {
        //             return setShowJoin(showJoin);
        //         }
        //     })
        //     }
        // }

        getJamDetails();
        // toggleShowJoin();
        

    }, [jam, showJoin]);

    // useEffect(() => {
    //     async function toggleShowJoin(){
    //         if (jam.jamUsers) {
    //         jam.jamUsers.map((user) => {
    //             if (user._id === loggedInUser._id) {
    //                 return setShowJoin(!showJoin);
    //             } else {
    //                 return setShowJoin(showJoin);
    //             }
    //         })
    //         }
    //     }
    //     toggleShowJoin();
    // }, [])

    const handleJoinJam = async () => {
        await axios.put(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/jams/${jam._id}/update-users`, null, { withCredentials: true}
        );
        toast.info("Jam Joined");
        history.push(`/jams/${jam._id}`);
    };

    return (
        <>
        {jam.jamCreator && 
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <img src={jam.jamPicture} alt="jam cover"/>
                            <p>Created by: </p>
                            <p>{jam.jamCreator.userName}</p>
                            <p>City: {jam.jamCity}</p>
                            <p>Adress: {jam.jamAddress}</p>
                            <p>Date: {jam.jamDate}</p>
                            <p>Start Time: {jam.jamStartTime}</p>
                            <p>End Time: {jam.jamEndTime}</p>
                            <p>About: {jam.jamDescription}</p>
                            <p>Jam Users:</p>
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
                            {showJoin && <button onClick={() => handleJoinJam()}>Join</button>}
                            <NavLink to={`/jams/${jam._id}/edit`}>Edit Jam</NavLink>
                        </div>
                    </div>
                </div>
        }
        </>
    );
};

export default JamDetails;