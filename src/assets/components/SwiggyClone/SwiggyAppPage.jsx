// src/components/SwiggyClone/SwiggyAppPage.jsx
import React from "react";
import HeaderBar from "./HeaderBar";
import SearchBar from "./SearchBar";
import BannerCarousel from "./BannerCarousel";
import CategoryScroller from "./CategoryScroller";
import OffersStrip from "./OffersStrip";
import "./SwiggyClone.css";
import RestaurantList from "./RestaurantList";

export default function SwiggyAppPage() {
  return (
    <div className="swiggy-wrapper">
      <HeaderBar />
      <SearchBar />
      <BannerCarousel />
      <CategoryScroller />
      <OffersStrip />
      <RestaurantList />
    </div>
  );
}
