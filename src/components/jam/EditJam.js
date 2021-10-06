import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function EditJam({match}) {
    const [jamCity, setJamCity] = useState("");
    const [jamAddress, setJamAddress] = useState("");
    const [jamDate, setJamDate] = useState("");
    const [jamStartTime, setJamStartTime] = useState("");
    const [jamEndTime, setJamEndTime] = useState("");
    const [jamPicture, setJamPicture] = useState("");
    const [jamDescription, setJamDescription] = useState("");

    const history = useHistory();

    useEffect(() => {
        async function getJam() {
          const response = await axios.get(
            `${process.env.REACT_APP_SERVER_HOSTNAME}/jams/${match.params.jamId}`
          );
    
          setJamCity(response.data.jamCity);
          setJamAddress(response.data.jamAddress);
          setJamDate(response.data.jamDate);
          setJamStartTime(response.data.jamStartTime);
          setJamEndTime(response.data.jamEndTime);
          setJamPicture(response.data.jamPicture);
          setJamDescription(response.data.jamDescription);
        }
        getJam();
    }, []);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const body = {
            jamCity,
            jamAddress,
            jamDate,
            jamStartTime,
            jamEndTime,
            jamPicture,
            jamDescription,
        };
    
        await axios.put(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/jams/${match.params.jamId}/update-details`,
          body
        );
            
        toast.success("Jam updated");
        history.push(`/jams/${match.params.jamId}`);
    };


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h2>Edit Jam</h2>

                        <form onSubmit={handleFormSubmit}>
                            <label>Jam City</label>
                            <input
                            type="text"
                            onChange={(e) => setJamCity(e.target.value)}
                            value={jamCity}
                            required
                            />

                            <label>Jam Address</label>
                            <input
                            type="text"
                            onChange={(e) => setJamAddress(e.target.value)}
                            value={jamAddress}
                            required
                            />

                            <label>Jam Date</label>
                            <input
                            type="date"
                            onChange={(e) => setJamDate(e.target.value)}
                            value={jamDate}
                            required
                            />

                            <label>Jam Start Time</label>
                            <input
                            type="time"
                            onChange={(e) => setJamStartTime(e.target.value)}
                            value={jamStartTime}
                            required
                            />

                            <label>Jam End Time</label>
                            <input
                            type="time"
                            onChange={(e) => setJamEndTime(e.target.value)}
                            value={jamEndTime}
                            />

                            <label>Jam Picture Url</label>
                            <input
                            type="url"
                            onChange={(e) => setJamPicture(e.target.value)}
                            value={jamPicture}
                            />

                            <label>Jam Description</label>
                            <input
                            type="text"
                            onChange={(e) => setJamDescription(e.target.value)}
                            value={jamDescription}
                            />

                            <button type="submit">Edit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditJam;