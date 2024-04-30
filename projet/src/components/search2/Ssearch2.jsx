import React, { useState } from 'react';
import './Search2.css';
import SearchBar2 from "./SearchBar2";
import SearchResaultsList2 from "./SearchResaultList2";

const Search2 = () => {
    const [results, setResults] = useState([]);
    return (
        <div>
            <div className="search-bar-container">
                <SearchBar2 setResults={setResults} />
                {results && results.length > 0 && <SearchResaultsList2 results={results} />}
            </div>
        </div>
    );
}

export default Search2;
