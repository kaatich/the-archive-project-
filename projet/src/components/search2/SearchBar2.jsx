import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar2.css";

 const SearchBar2 = ({ setResults }) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((user) => {
                    return (
                        value &&
                        user &&
                        user.name &&
                        user.name.toLowerCase().includes(value)
                    );
                });
                setResults(results);
            });
    };

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input
            className="input-search"
                placeholder=" أكتب للبحث ..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};
export default SearchBar2; // Export SearchBar as default
 