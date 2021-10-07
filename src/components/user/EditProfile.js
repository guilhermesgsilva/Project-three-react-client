import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { LoggedUserConsumer } from "../../context/loggedUser";
import { toast } from "react-toastify";
import axios from "axios";

function EditProfile({setLoggedInUser}) {
    const loggedInUser = useContext(LoggedUserConsumer);
    const [userTitle, setUserTitle] = useState("");
    const [userPicture, setUserPicture] = useState("");
    const [userDescription, setUserDescription] = useState("");

    const history = useHistory();

    useEffect(() => {
        async function getUser() {
          const response = await axios.get(
            `${process.env.REACT_APP_SERVER_HOSTNAME}/users/${loggedInUser._id}`
          );
    
          setUserTitle(response.data.userTitle);
          setUserDescription(response.data.userDescription);
          setUserPicture(response.data.userPicture);
        }
        getUser();
    }, []);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (typeof userPicture !== "string") {
            const uploadData = new FormData();
            uploadData.append("file", userPicture);

            const upload = await axios.post(
            `${process.env.REACT_APP_SERVER_HOSTNAME}/upload`,
            uploadData
            );

            const body = {
                userTitle,
                userDescription,
                userPicture: upload.data.fileUrl,
            };

            const response = await axios.put(
                `${process.env.REACT_APP_SERVER_HOSTNAME}/users/${loggedInUser._id}/update`,
                body
            );
                  
            setLoggedInUser(response.data);
            toast.success("User updated");
            history.push("/profile");
        } else {
            const body = {
            userTitle,
            userDescription,
            };
        
            const response = await axios.put(
            `${process.env.REACT_APP_SERVER_HOSTNAME}/users/${loggedInUser._id}/update`,
            body
            );
                
            setLoggedInUser(response.data);
            toast.success("User updated");
            history.push("/profile");
        } 
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h2>Edit Profile</h2>
                        
                        <form onSubmit={handleFormSubmit} encType="multipart/form-data">
                            <label>User Title</label>
                            <input
                                type="text"
                                onChange={(e) => setUserTitle(e.target.value)}
                                value={userTitle}
                            />

                            <label>User Description</label>
                            <input
                                type="text"
                                onChange={(e) => setUserDescription(e.target.value)}
                                value={userDescription}
                            />

                            <label>User Picture Url</label>
                            <input
                                type="file"
                                onChange={(e) => setUserPicture(e.target.files[0])}
                            />

                            <button type="submit">Edit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditProfile;