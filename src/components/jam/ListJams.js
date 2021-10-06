import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import SearchJams from "../search/SearchJams";

function ListJams() {
    const [jams, setJams] = useState([]);
    const [filteredJams, setFilteredJams] = useState(jams);

    useEffect(() => {
        async function getAllJams() {
          const response = await axios.get(
            `${process.env.REACT_APP_SERVER_HOSTNAME}/jams`,
            { withCredentials: true }
          );
          setJams(response.data);
        }
        getAllJams();
    }, []);

    const filterJams = (search) => {
        setFilteredJams(jams.filter((jam) => jam.jamCity.includes(search)))
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <SearchJams filterJams={filterJams}/>
                        <ul>
                            {filteredJams.slice(0).reverse().map((jam) => {
                                return (
                                    <li key={jam._id}>
                                        <NavLink to={`/jams/${jam._id}`}>Jam at {jam.jamAddress} in {jam.jamCity} City</NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListJams;