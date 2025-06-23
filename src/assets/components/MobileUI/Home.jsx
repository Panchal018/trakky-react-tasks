import React from 'react';
import CardSwiper from './CardSwiper';
import './Home.css'; // or Tailwind
// import '../../styles/mobile-ui/Home.css';


export default function Home() {
  return (
   <div className="home-container">
      <header className="top-bar">Trakky UI Clone</header>

      <div className="search-box">
        <input type="text" placeholder="Search spas, salons..." />
      </div>

      <section className="section-block">
        <h2>🔥 Featured Services</h2>
        <CardSwiper />
      </section>

      <section className="section-block">
        <h2>🏆 Top Rated</h2>
        <CardSwiper />
      </section>
    </div>
  );
}
