import React, { useState } from 'react';

function Search ({filterJams}) {
    const [search, setSearch] = useState("");

    const handleSearchInput = (e) => {
        setSearch(e.target.value)
        filterJams(e.target.value)
    };

    return (
        <form >
            <label>Search</label>
            <input value={search} type="text" onChange={handleSearchInput} placeholder="Search for City"/>
        </form>
    )
};

export default Search;