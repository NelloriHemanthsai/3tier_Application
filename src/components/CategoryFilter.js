function CategoryFilter(props) {
    return (
        <div className="category-filter">
            <label htmlFor="cuisine">Filter by cuisine: </label>

            <select
                id="cuisine"
                value={props.selectedCuisine}
                onChange={(event) => props.onCuisineChange(event.target.value)}
            >
                <option value="All">All cuisines</option>

                {props.cuisines.map((cuisine) => (
                    <option key={cuisine} value={cuisine}>
                        {cuisine}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CategoryFilter;
