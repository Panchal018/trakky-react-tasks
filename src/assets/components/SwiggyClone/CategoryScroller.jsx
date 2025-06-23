// src/components/SwiggyClone/CategoryScroller.jsx
import React from "react";
import "./SwiggyClone.css";

const categories = [
  { title: "Biryani", img: "https://i.pinimg.com/736x/1a/59/f0/1a59f0e988c227075ce7a6e261f9f362.jpg" },
  { title: "Pizza", img: "https://i.pinimg.com/736x/f9/00/7f/f9007f73da46783cb255a1e621637f27.jpg" },
  { title: "Burger", img: "https://i.pinimg.com/736x/e2/63/e5/e263e50bc39528becbd777a271e297af.jpg" },
  { title: "Cake", img: "https://i.pinimg.com/736x/b4/84/95/b48495be28db56f015219bce5e043cbd.jpg" },
  { title: "Ice Cream", img: "https://i.pinimg.com/736x/0e/fe/e6/0efee68ee2d809bc505e6980d26b5272.jpg" },
  { title: "Drinks", img: "https://i.pinimg.com/736x/8e/bc/69/8ebc697037c545282ebbede69daa99d7.jpg" },
];

export default function CategoryScroller() {
  return (
    <div className="category-scroller">
      {categories.map((cat, index) => (
        <div key={index} className="category-card">
          <img 
            src={cat.img} 
            alt={cat.title} 
            className="category-image"
          />
          {/* <span className="category-title">{cat.title}</span> */}
        </div>
      ))}
    </div>
  );
}