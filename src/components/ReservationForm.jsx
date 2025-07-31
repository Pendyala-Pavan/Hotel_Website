import React, { useState } from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import "../components/ReservationForm.css";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    guests: "",
    date: "",
  });
  const [time, setTime] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!time) {
      alert("Please select a time for the reservation.");
      return;
    }
    alert(`Reservation confirmed for ${formData.name} at ${time}`);
    setFormData({ name: "", guests: "", date: "" });
    setTime(null);
  };

  return (
    <section className="reservation-section">
      <div className="reservation-overlay">
        <div className="reservation-container">
          <h2 className="reservation-title">Reserve a Table</h2>
          <form className="reservation-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="guests"
              placeholder="No. of Guests"
              value={formData.guests}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <TimePicker
              onChange={setTime}
              value={time}
              className="custom-time-picker"
              disableClock
              format="hh:mm a"
              placeholder="Select Time"
              required
            />
            <button type="submit">Book Now</button>
          </form>

          {/* 🔽 Footer Section */}
          <div className="reservation-footer">
            <p>
              <strong>Owner:</strong> P. Ramarao
            </p>
            <p>
              <strong>Contact:</strong> +91 98664 48734
            </p>
            <p>
              <strong>Email:</strong> veeranjaneyamess@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
