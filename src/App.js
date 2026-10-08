import React from "react";
import "./App.css";

// Restaurant data
// Later this data will come from our backend API.
const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    cuisine: "Italian, Pizza",
    rating: 4.5,
    deliveryTime: "30 mins",
    image: "🍕"
  },
  {
    id: 2,
    name: "Burger House",
    cuisine: "Burgers, Fast Food",
    rating: 4.3,
    deliveryTime: "25 mins",
    image: "🍔"
  },
  {
    id: 3,
    name: "Biryani Point",
    cuisine: "Biryani, Indian",
    rating: 4.7,
    deliveryTime: "35 mins",
    image: "🍗"
  },
  {
    id: 4,
    name: "South Spice",
    cuisine: "South Indian",
    rating: 4.6,
    deliveryTime: "20 mins",
    image: "🍛"
  }
];


// Restaurant Card component
function RestaurantCard(props) {

  return (
    <div className="restaurant-card">

      <div className="restaurant-image">
        {props.restaurant.image}
      </div>

      <h2>
        {props.restaurant.name}
      </h2>

      <p>
        {props.restaurant.cuisine}
      </p>

      <p>
        ⭐ {props.restaurant.rating}
      </p>

      <p>
        🛵 {props.restaurant.deliveryTime}
      </p>

      <button>
        View Restaurant
      </button>

    </div>
  );
}


// Main App component
function App() {

  return (

    <div className="app">

      {/* Navigation bar */}

      <nav className="navbar">

        <h1>🍔 FoodHub</h1>

        <div className="nav-links">
          <span>Home</span>
          <span>Restaurants</span>
          <span>Login</span>
        </div>

      </nav>


      {/* Hero section */}

      <section className="hero">

        <h2>
          Order food from your favorite restaurants
        </h2>

        <p>
          Delicious food delivered to your doorstep
        </p>

        <input
          type="text"
          placeholder="Search for food or restaurants..."
        />

      </section>


      {/* Restaurant section */}

      <section className="restaurants">

        <h2>
          Popular Restaurants
        </h2>

        <div className="restaurant-container">

          {restaurants.map(function(restaurant) {

            return (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
              />
            );

          })}

        </div>

      </section>

    </div>
  );
}


export default App;


