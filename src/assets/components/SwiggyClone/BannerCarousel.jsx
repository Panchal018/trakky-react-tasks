import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const banners = [
  "https://i.pinimg.com/736x/47/a9/99/47a9993c7d44c7f864533e6ba8f171c1.jpg" ,
  
];

export default function BannerCarousel() {
  return (
    <div className="w-full max-w-screen-sm mx-auto rounded-lg overflow-hidden shadow-md">
      <Swiper spaceBetween={10} slidesPerView={1} loop={true}>
        {banners.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`banner-${index}`}
              className="w-full h-48 object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
// Add any additional styles or configurations for the carousel here