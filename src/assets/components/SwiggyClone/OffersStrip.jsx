// src/components/SwiggyClone/OffersStrip.jsx
import React from "react";
import "./SwiggyClone.css";

const offers = [
  {
    img: "https://i.pinimg.com/736x/d8/98/13/d89813f536f3e1654741c252ff3619a6.jpg",
    alt: "Flat 200 OFF",
  },
  {
    img: "https://i.pinimg.com/736x/56/e5/0b/56e50b90767546ea926f0a796ecaeb79.jpg",
    alt: "Flash Sale",
  },
];

export default function OffersStrip() {
  return (
    <div className="offers-strip">
      {offers.map((offer, i) => (
        <img key={i} src={offer.img} alt={offer.alt} />
      ))}
    </div>
  );
}
