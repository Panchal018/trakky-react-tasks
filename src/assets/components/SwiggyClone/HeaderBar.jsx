// src/components/SwiggyClone/HeaderBar.jsx
import React from "react";
import { FaUserCircle, FaAngleDown } from "react-icons/fa";
import "./SwiggyClone.css";

export default function HeaderBar() {
  return (
    <div className="header-bar">
      <div className="location">
        <span>📍 Home</span>
        <FaAngleDown size={12} />
        <p className="address">Samras Boys Hostel, 132 Feet Ring Road</p>
      </div>
      <div className="right-icons">
        <span className="buy-one">BUY <strong>ONE</strong></span>
        <FaUserCircle size={24} />
      </div>
    </div>
  );
}
