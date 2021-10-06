import React, { useState } from 'react';

function Search ({filterUsers}) {
    const [search, setSearch] = useState("");

    const handleSearchInput = (e) => {
        setSearch(e.target.value)
        filterUsers(e.target.value)
    };

    return (
        <form >
            <label>Search</label>
            <input value={search} type="text" onChange={handleSearchInput} placeholder="Search for Username"/>
        </form>
    )
};

export default Search;
