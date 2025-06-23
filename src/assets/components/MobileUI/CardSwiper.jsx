// src/components/MobileUI/CardSwiper.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function CardSwiper() {
 const data = [
  {
    id: 1,
    title: "Thai Spa",
    image: "https://i.pinimg.com/736x/f7/78/14/f7781400f646566e9bab643110da0c96.jpg"
  },
  {
    id: 2,
    title: "Hair Studio",
    image: "https://i.pinimg.com/736x/fa/1f/2f/fa1f2fc5d12c49926727140f332c120a.jpg"
  },
  {
    id: 3,
    title: "Nail Art",
    image: "https://i.pinimg.com/736x/e7/b4/22/e7b42254ab0ff215bba9b10b7f00602e.jpg"
  }
];


  return (
    <Swiper spaceBetween={10} slidesPerView={2} breakpoints={{
      350: { slidesPerView: 2 },
      500: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
    }}>
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
