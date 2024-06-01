import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form validation and submission logic here
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} aria-label="Booking Form">
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} required />

            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="date">Date:</label>
            <input id="date" type="date" name="date" value={formData.date} onChange={handleChange} required />

            <label htmlFor="time">Time:</label>
            <input id="time" type="time" name="time" value={formData.time} onChange={handleChange} required />

            <label htmlFor="guests">Number of Guests:</label>
            <input id="guests" type="number" name="guests" value={formData.guests} onChange={handleChange} required min="1" />

            <button type="submit">Book Table</button>
        </form>
    );
};

export default BookingForm;
