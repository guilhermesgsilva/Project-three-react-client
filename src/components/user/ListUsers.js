import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import SearchUsers from "../search/SearchUsers";

function ListUsers() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState(users);

    useEffect(() => {
        async function getAllUsers() {
          const response = await axios.get(
            `${process.env.REACT_APP_SERVER_HOSTNAME}/users`,
            { withCredentials: true }
          );
          setUsers(response.data);
          setFilteredUsers(response.data);
        }
        getAllUsers();
    }, []);

    const filterUsers = (search) => {
        setFilteredUsers(users.filter((user) => user.userName.includes(search)))
    };

    return (
        <>
            <div className="row background-color-light-blue">
                <div className="col-12 align-items-center">
                    <SearchUsers filterUsers={filterUsers} />
                    {filteredUsers.length > 0 ? (
                        <ul>
                            {filteredUsers.map((user) => {
                                return (
                                    <li key={user._id}>
                                        <NavLink to={`/users/${user._id}`}>{user.userName}</NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    ) : (<p className="loading">Loading...</p>)}
                </div>
            </div>
        </>
    );
};

export default ListUsers;