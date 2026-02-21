
import RestCard from "./RestCards";
import restaurants from "../utils/RestaurantData";
import { use, useState } from "react";

const Body = () => {
    const [ restaurants, setrestaurants] = useState([{
    id: 401,
    name: "Green Leaf Cafe",
    cuisines: ["Pure Veg", "North Indian"],
    rating: 4.4,
    time: "30 mins",
    image: "https://pestoandpotatoes.com/wp-content/uploads/2025/04/Simple-Green-Salad-scaled.jpg"
  },
  {
    id: 402,
    name: "Dosa Delight Veg",
    cuisines: ["Pure Veg", "South Indian"],
    rating: 4.5,
    time: "25 mins",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8owQcHu1csisSyh9hXKZ1f7eWK2hmbp7ZQ&s"
  },
  {
    id: 403,
    name: "Paneer Palace",
    cuisines: ["Pure Veg", "Punjabi"],
    rating: 4.3,
    time: "35 mins",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdm2WEvdeCYKsdfcxy1drlrx57eF65mxHNYA&s"
  },]); 
  //this is a state variable which will hold the restaurant data and can be updated using setRestaurants function. Initially it is set to the imported restaurant data.
    return (
        <div className='body'>
            <div className='filter'> 
                <button className="filter-btn" onClick={() =>{
                    const sortedRestaurants = restaurants.filter((restaurant) => restaurant.rating >= 4.5);
                    setrestaurants(sortedRestaurants);
                }}> Top rated Rest</button>
            </div>
            <div className='cards'>
                {restaurants.map((restaurant) => (
                    <RestCard
                        key={restaurant.id}
                        name={restaurant.name}
                        cuisines={restaurant.cuisines.join(", ")}
                        rating={restaurant.rating}
                        time={restaurant.time}
                        image={restaurant.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;