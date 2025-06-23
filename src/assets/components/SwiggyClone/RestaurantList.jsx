// src/components/SwiggyClone/RestaurantList.jsx
import React from "react";
import RestaurantCard from "./RestaurantCard";

const restaurants = [
  {
    name: "Burger Kingdom",
    cuisine: "American, Fast Food",
    rating: "4.3",
    time: "25",
    distance: "2.1",
    offer: "50% OFF up to ₹100",
    img: "https://i.pinimg.com/736x/49/fb/ee/49fbee60a2bd41f0c1e33a4bf90ff0f1.jpg",
  },
  {
    name: "Sushi Bar",
    cuisine: "Japanese, Sushi",
    rating: "4.7",
    time: "30",
    distance: "3.2",
    offer: "Free delivery",
    img: "https://i.pinimg.com/736x/03/91/c5/0391c59d7b33d5e1553289c44662ef37.jpg",
  },
  {
    name: "Spice Villa",
    cuisine: "Indian, Curry",
    rating: "4.2",
    time: "20",
    distance: "1.8",
    offer: "40% OFF + 10% cashback",
    img: "https://i.pinimg.com/736x/1d/e8/32/1de832e65ce9d7905be9f4b389dd87c4.jpg",
  },
];

export default function RestaurantList() {
  return (
    <div className="restaurant-list">
      <h2>Restaurants Near You</h2>
      {restaurants.map((res, i) => (
        <RestaurantCard key={i} data={res} />
      ))}
    </div>
  );
}
