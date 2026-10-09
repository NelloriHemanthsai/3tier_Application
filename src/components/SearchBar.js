
import { useState } from "react";

function SearchBar(props) {
    // Store the text entered by the user.
    const [searchText, setSearchText] = useState("");

    // Call the parent's search function when the button is clicked.
    function handleSearch() {
        props.onSearch(searchText);
    }

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search restaurants or food..."
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
            />

            <button onClick={handleSearch}>
                Search
            </button>
        </div>
    );
}

export default SearchBar;