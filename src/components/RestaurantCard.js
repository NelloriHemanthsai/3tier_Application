
function RestaurantCard(props) {
    // Get restaurant data passed from App.js.
    const restaurant = props.restaurant;

    return (
        <div className="restaurant-card">
            <img
                src={restaurant.image}
                alt={restaurant.name}
            />

            <h3>{restaurant.name}</h3>

            <p>{restaurant.cuisine}</p>

            <p>⭐ {restaurant.rating}</p>

            <p>🕒 {restaurant.deliveryTime}</p>

            <p>₹{restaurant.costForTwo} for two</p>

            <button>View Menu</button>
        </div>
    );
}

export default RestaurantCard;