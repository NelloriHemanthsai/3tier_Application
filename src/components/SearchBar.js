
import { useState } from "react";

function SearchBar(props) {
    // Store the text entered by the user.
    const [searchText, setSearchText] = useState("");

    function handleChange(event) {
        const value = event.target.value;

        // Update the input field.
        setSearchText(value);

        // Send the search text to App.js immediately.
        props.onSearch(value);
    }

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search recipes or cuisine..."
                value={searchText}
                onChange={handleChange}
            />
        </div>
    );
}

export default SearchBar;
