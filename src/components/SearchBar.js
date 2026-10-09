function SearchBar() {
    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search restaurants or food..."
            />
            <button>Search</button>
        </div>
    );
}

export default SearchBar;