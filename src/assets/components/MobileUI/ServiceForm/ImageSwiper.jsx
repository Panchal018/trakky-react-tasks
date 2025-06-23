// src/components/ServiceForm/ImageSwiper.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ImageSwiper({ files }) {
  if (!files || files.length === 0) return null;

  const images = files.map(file => URL.createObjectURL(file));

  return (
    <Swiper spaceBetween={10} slidesPerView={1}>
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <img src={src} alt={`preview-${i}`} style={{ width: "100%", borderRadius: "10px" }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
