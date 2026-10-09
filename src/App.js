
import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Category from "./components/Category";
import RestaurantCard from "./components/RestaurantCard";

function App() {
    // Remember the text submitted to the search.
    const [searchText, setSearchText] = useState("");

    const categories = [
        { id: 1, name: "Pizza", icon: "🍕" },
        { id: 2, name: "Burger", icon: "🍔" },
        { id: 3, name: "Biryani", icon: "🍗" },
        { id: 4, name: "Healthy", icon: "🥗" },
        { id: 5, name: "South Indian", icon: " dosa" }
    ];

    const restaurants = [
        {
            id: 1,
            name: "Pizza Palace",
            cuisine: "Italian Pizza",
            rating: 4.5,
            deliveryTime: "30-35 mins",
            costForTwo: 400,
            image: "https://images.unsplash.com/photo-1579751626657-72bc17010498"
        },
        {
            id: 2,
            name: "Burger House",
            cuisine: "American Burgers",
            rating: 4.2,
            deliveryTime: "25-30 mins",
            costForTwo: 300,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
        },
        {
            id: 3,
            name: "Biryani Point",
            cuisine: "Indian Biryani",
            rating: 4.7,
            deliveryTime: "35-40 mins",
            costForTwo: 500,
            image: "https://images.unsplash.com/photo-1563379091339-03246963d96c"
        },
        {
            id: 4,
            name: "Dosa Corner",
            cuisine: "South Indian Dosa",
            rating: 4.3,
            deliveryTime: "20-25 mins",
            costForTwo: 250,
            image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976"
        }
    ];

    // Keep restaurants whose name or cuisine matches the search.
    const filteredRestaurants = restaurants.filter(function (restaurant) {
        return (
            restaurant.name.toLowerCase().includes(searchText.toLowerCase()) ||
            restaurant.cuisine.toLowerCase().includes(searchText.toLowerCase())
        );
    });

    return (
        <div>
            <Navbar />

            <div className="hero">
                <h1>Delicious food delivered to your door</h1>
                <p>Order food from your favorite restaurants</p>

                <SearchBar onSearch={setSearchText} />
            </div>

            <div className="container">
                <h2>Food Categories</h2>

                <div className="categories">
                    {categories.map(function (category) {
                        return (
                            <Category
                                key={category.id}
                                name={category.name}
                                icon={category.icon}
                            />
                        );
                    })}
                </div>

                <h2>Popular Restaurants</h2>

                <div className="restaurant-list">
                    {filteredRestaurants.length > 0 ? (
                        filteredRestaurants.map(function (restaurant) {
                            return (
                                <RestaurantCard
                                    key={restaurant.id}
                                    restaurant={restaurant}
                                />
                            );
                        })
                    ) : (
                        <p>No restaurants found. Try another search.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;