// src/pages/ServiceForm.jsx

import React, { useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";

export default function ServiceForm() {
  const [form, setForm] = useState({
    spa_name: "",
    city: "",
    area: "",
    price: "",
    timing: "",
    images: [],
  });

  const [previewUrls, setPreviewUrls] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setForm({ ...form, images: files });
    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("spa_name", form.spa_name);
    payload.append("city", form.city);
    payload.append("area", form.area);
    payload.append("price", form.price);
    payload.append("timing", form.timing);
    form.images.forEach((img) => payload.append("images", img));

    try {
      const res = await axios.post(
        "http://20.193.149.47:2242/spas/vendor-spa-update-test/1/",
        payload,
        { headers: { "Content-Type": "multipart/form-data" } }
      );console.log(res.data);
      alert("Spa submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to submit form.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-purple-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-10 p-8"
      >
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-blue-600">Enter Spa Details</h2>

          <input
            type="text"
            name="spa_name"
            placeholder="Spa Name"
            value={form.spa_name}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="text"
            name="area"
            placeholder="Area"
            value={form.area}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="time"
            name="timing"
            value={form.timing}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="file"
            name="images"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition duration-200"
          >
            Submit Spa
          </button>
        </motion.form>

        {/* Preview */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-purple-600">Live Preview</h2>
          <div className="bg-gray-50 p-4 rounded-xl shadow-inner space-y-3">
            <p><strong>Spa Name:</strong> {form.spa_name}</p>
            <p><strong>City:</strong> {form.city}</p>
            <p><strong>Area:</strong> {form.area}</p>
            <p><strong>Price:</strong> ₹{form.price}</p>
            <p><strong>Timing:</strong> {form.timing}</p>
          </div>

          {previewUrls.length > 0 && (
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              className="mt-6 rounded-xl overflow-hidden shadow-lg"
            >
              {previewUrls.map((url, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={url}
                    alt={`preview-${i}`}
                    className="w-full h-64 object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
