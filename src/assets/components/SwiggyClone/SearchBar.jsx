// src/components/SwiggyClone/SearchBar.jsx
import React from "react";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import "./SwiggyClone.css";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search for 'Sweets'"
        className="search-input"
      />
      <FaMicrophone className="mic-icon" />
    </div>
  );
}
