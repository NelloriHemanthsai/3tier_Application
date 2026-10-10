
import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Category from "./components/Category";
import RestaurantCard from "./components/RestaurantCard";

function App() {
    // Store recipes received from the API.
    const [recipes, setRecipes] = useState([]);

    // Track whether the API request is still running.
    const [loading, setLoading] = useState(true);

    // Store an error message if the request fails.
    const [error, setError] = useState("");

    // Store the search text submitted by the user.
    const [searchText, setSearchText] = useState("");

    // Fetch recipes once when the component first loads.
    useEffect(() => {
        async function fetchRecipes() {
            try {
                const response = await fetch(
                    "https://dummyjson.com/recipes?limit=12"
                );

                // fetch() does not automatically reject HTTP errors like 404.
                if (!response.ok) {
                    throw new Error("Failed to fetch recipes");
                }

                // Convert the response body from JSON into JavaScript data.
                const data = await response.json();

                // The API returns an object containing a recipes array.
                setRecipes(data.recipes);
            } catch (err) {
                setError(err.message);
            } finally {
                // Runs whether the request succeeds or fails.
                setLoading(false);
            }
        }

        fetchRecipes();
    }, []);

    // Filter recipes by name or cuisine.
    const filteredRecipes = recipes.filter((recipe) => {
        const search = searchText.toLowerCase();

        return (
            recipe.name.toLowerCase().includes(search) ||
            recipe.cuisine.toLowerCase().includes(search)
        );
    });

    const categories = [
        { id: 1, name: "Pizza", icon: "🍕" },
        { id: 2, name: "Burger", icon: "🍔" },
        { id: 3, name: "Biryani", icon: "🍗" },
        { id: 4, name: "Healthy", icon: "🥗" },
        { id: 5, name: "South Indian", icon: "🍽️" }
    ];

    return (
        <div>
            <Navbar />

            <div className="hero">
                <h1>Delicious food delivered to your door</h1>
                <p>Explore recipes from our demo API</p>

                <SearchBar onSearch={setSearchText} />
            </div>

            <div className="container">
                <h2>Food Categories</h2>

                <div className="categories">
                    {categories.map((category) => (
                        <Category
                            key={category.id}
                            name={category.name}
                            icon={category.icon}
                        />
                    ))}
                </div>

                <h2>Recipes from API</h2>

                {loading && <p>Loading recipes...</p>}

                {!loading && error && (
                    <p>Could not load recipes: {error}</p>
                )}

                {!loading && !error && (
                    <div className="restaurant-list">
                        {filteredRecipes.length > 0 ? (
                            filteredRecipes.map((recipe) => (
                                <RestaurantCard
                                    key={recipe.id}
                                    restaurant={recipe}
                                />
                            ))
                        ) : (
                            <p>No recipes found. Try another search.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
