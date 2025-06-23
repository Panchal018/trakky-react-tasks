// src/components/ServiceForm/LivePreview.jsx
import React from "react";
import ImageSwiper from "./ImageSwiper";

export default function LivePreview({ data }) {
  const { spa_name, city, area, price, timing, images } = data;

  return (
    <div className="preview-box">
         <img
    src="https://i.pinimg.com/736x/f5/c2/8e/f5c28ee1b5c02757fbf508a358164b9d.jpg"
    alt="Spa Logo"
    className="preview-logo"
  />
      <h3>Live Preview</h3>
      <p><strong>Name:</strong> {spa_name}</p>
      <p><strong>City:</strong> {city}</p>
      <p><strong>Area:</strong> {area}</p>
      <p><strong>Price:</strong> ₹{price}</p>
      <p><strong>Timing:</strong> {timing}</p>
      <ImageSwiper files={images} />
    </div>
  );
}
