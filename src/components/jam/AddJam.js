import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function AddJam() {
    const [jamCity, setJamCity] = useState("");
    const [jamAddress, setJamAddress] = useState("");
    const [jamDate, setJamDate] = useState("");
    const [jamStartTime, setJamStartTime] = useState("");
    const [jamEndTime, setJamEndTime] = useState("");

    const history = useHistory();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        const body = {
            jamCity,
            jamAddress,
            jamDate,
            jamStartTime,
            jamEndTime
        };
        
        await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/jams/create`, body, { withCredentials: true});
        toast.success("Project created");
        history.push("/jams");
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h2>Add Jam</h2>

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

                            <button type="submit">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddJam;