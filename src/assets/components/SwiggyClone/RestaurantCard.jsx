// src/components/SwiggyClone/RestaurantCard.jsx
import React from "react";
import "./SwiggyClone.css";


export default function RestaurantCard({ data }) {
  return (
    <div className="restaurant-card">
      <img src={data.img} alt={data.name} className="restaurant-img" />
      <div className="restaurant-info">
        <h3>{data.name}</h3>
        <p className="meta">{data.cuisine} • {data.rating} ★</p>
        <p className="meta">{data.time} mins • {data.distance} km</p>
        <p className="offer">{data.offer}</p>
      </div>
    </div>
  );
}
