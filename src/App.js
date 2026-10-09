import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Category from "./components/Category";
import RestaurantCard from "./components/RestaurantCard";

function App() {

    const categories = [
        {
            id: 1,
            name: "Pizza",
            icon: "🍕"
        },
        {
            id: 2,
            name: "Burger",
            icon: "🍔"
        },
        {
            id: 3,
            name: "Biryani",
            icon: "🍗"
        },
        {
            id: 4,
            name: "Healthy",
            icon: "🥗"
        }
    ];

    const restaurants = [
        {
            id: 1,
            name: "Pizza Palace",
            cuisine: "Italian",
            rating: 4.5,
            deliveryTime: "30-35 mins",
            image: "https://images.unsplash.com/photo-1579751626657-72bc17010498"
        },
        {
            id: 2,
            name: "Burger House",
            cuisine: "American",
            rating: 4.2,
            deliveryTime: "25-30 mins",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
        },
        {
            id: 3,
            name: "Biryani Point",
            cuisine: "Indian",
            rating: 4.7,
            deliveryTime: "35-40 mins",
            image: "https://images.unsplash.com/photo-1563379091339-03246963d96c"
        }
    ];

    return (

        <div>

            <Navbar />

            <div className="hero">

                <h1>
                    Delicious food delivered to your door
                </h1>

                <p>
                    Order food from your favorite restaurants
                </p>

                <SearchBar />

            </div>


            <div className="container">

                <h2>Food Categories</h2>

                <div className="categories">

                    {categories.map(function(category) {

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

                    {restaurants.map(function(restaurant) {

                        return (
                            <RestaurantCard
                                key={restaurant.id}
                                restaurant={restaurant}
                            />
                        );

                    })}

                </div>

            </div>

        </div>

    );
}

export default App;