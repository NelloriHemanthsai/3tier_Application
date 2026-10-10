
import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Category from "./components/Category";
import RestaurantCard from "./components/RestaurantCard";
import CategoryFilter from "./components/CategoryFilter";

function App() {
    // Data received from the demo API.
    const [recipes, setRecipes] = useState([]);

    // Track API loading and errors.
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Track the user's search and cuisine selection.
    const [searchText, setSearchText] = useState("");
    const [selectedCuisine, setSelectedCuisine] = useState("All");

    // Fetch recipes when the component first loads.
    useEffect(() => {
        async function fetchRecipes() {
            try {
                const response = await fetch(
                    "https://dummyjson.com/recipes?limit=12"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch recipes");
                }

                const data = await response.json();
                setRecipes(data.recipes);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchRecipes();
    }, []);

    // Get unique cuisine names from the API data.
    const cuisines = [
        ...new Set(recipes.map((recipe) => recipe.cuisine))
    ].sort();

    // Filter by both search text and selected cuisine.
    const filteredRecipes = recipes.filter((recipe) => {
        const search = searchText.trim().toLowerCase();

        const matchesSearch =
            recipe.name.toLowerCase().includes(search) ||
            recipe.cuisine.toLowerCase().includes(search);

        const matchesCuisine =
            selectedCuisine === "All" ||
            recipe.cuisine === selectedCuisine;

        return matchesSearch && matchesCuisine;
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

                <CategoryFilter
                    cuisines={cuisines}
                    selectedCuisine={selectedCuisine}
                    onCuisineChange={setSelectedCuisine}
                />
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
                    <>
                        <p>
                            Showing {filteredRecipes.length} of {recipes.length} recipes
                        </p>

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
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
