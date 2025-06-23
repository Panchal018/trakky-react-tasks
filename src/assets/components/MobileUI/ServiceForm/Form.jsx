// src/components/ServiceForm/Form.jsx
import React, { useState } from "react";
import LivePreview from "./LivePreview";
import "./Form.css";
import { FaSpa, FaCity, FaMapMarkerAlt, FaRupeeSign, FaClock } from "react-icons/fa";

export default function Form() {
  const [formData, setFormData] = useState({
    spa_name: "",
    city: "",
    area: "",
    price: "",
    timing: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({ ...prev, images: files }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("spa_name", formData.spa_name);
    payload.append("city", formData.city);
    payload.append("area", formData.area);
    payload.append("price", formData.price);
    payload.append("timing", formData.timing);
    formData.images.forEach((file) => payload.append("images", file));

    try {
      const res = await fetch(
        "http://20.193.149.47:2242/spas/vendor-spa-update-test/1/",
        {
          method: "POST",
          body: payload,
        }
      );
      const data = await res.json();
      alert("Form submitted successfully!");
      console.log(data);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting form");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="left-form">
        <h2>Enter Spa Details</h2>
{/* 
        <input
          type="text"
          name="spa_name"
          placeholder="Spa Name"
          value={formData.spa_name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="area"
          placeholder="Area"
          value={formData.area}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="timing"
          placeholder="Timing"
          value={formData.timing}
          onChange={handleChange}
          required
        />

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
        /> */}
<div className="input-group">
  <FaSpa className="icon" />
  <input
    type="text"
    name="spa_name"
    placeholder="Spa Name"
    value={formData.spa_name}
    onChange={handleChange}
    required
  />
</div>

<div className="input-group">
  <FaCity className="icon" />
  <input
    type="text"
    name="city"
    placeholder="City"
    value={formData.city}
    onChange={handleChange}
    required
  />
</div>

<div className="input-group">
  <FaMapMarkerAlt className="icon" />
  <input
    type="text"
    name="area"
    placeholder="Area"
    value={formData.area}
    onChange={handleChange}
    required
  />
</div>

<div className="input-group">
  <FaRupeeSign className="icon" />
  <input
    type="number"
    name="price"
    placeholder="Price"
    value={formData.price}
    onChange={handleChange}
    required
  />
</div>

<div className="input-group">
  <FaClock className="icon" />
  <input
    type="time"
    name="timing"
    placeholder="Timing"
    value={formData.timing}
    onChange={handleChange}
    required
  />
</div>

      {/* Image file input */}
      <div className="input-group mb-3">
        <input
          type="file"
          className="form-control"
          multiple
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>

      <button type="submit">Submit</button>
      </form>

      <div className="right-preview">
        <LivePreview data={formData} />
      </div>
    </div>
  );
}
