
function RestaurantCard(props) {
    // This prop now contains one recipe from the API.
    const restaurant = props.restaurant;

    return (
        <div className="restaurant-card">
            <img
                src={restaurant.image}
                alt={restaurant.name}
            />

            <h3>{restaurant.name}</h3>

            <p>Cuisine: {restaurant.cuisine}</p>

            <p>⭐ {restaurant.rating}</p>

            <p>⏱️ Preparation: {restaurant.prepTimeMinutes} mins</p>

            <p>🔥 Calories: {restaurant.caloriesPerServing} per serving</p>

            <button>View Recipe</button>
        </div>
    );
}

export default RestaurantCard;
