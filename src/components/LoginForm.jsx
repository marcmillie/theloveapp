import React, { useState } from "react";
import "../styles/LoginForm.css"; // Importing the CSS for styling
import { Link } from "react-router-dom";

const LoginForm = () => {
  // Setting up state to track form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    birthMonth: "",
    birthDay: "",
    birthYear: "",
    gender: "",
    preference: "",
  });

  // Handles changes in any form input field
  const handleChange = (e) => {
    // e.target.name = the field's name, e.target.value = the user's input
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload on form submit
    console.log("Form submitted:", formData); // Placeholder action for now
    // We’ll add age verification and backend request here later
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Create Your Account</h2>

      {/* User Name Input */}
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
      />

      {/* Email Input */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />

      {/* Password Input */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />

      {/* Date of Birth Inputs */}
      <div className="dob-section">
        <label>Date of Birth:</label>
        <input
          type="number"
          name="birthMonth"
          placeholder="MM"
          min="1"
          max="12"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="birthDay"
          placeholder="DD"
          min="1"
          max="31"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="birthYear"
          placeholder="YYYY"
          onChange={handleChange}
          required
        />
      </div>

      {/* Gender Selection */}
      <select name="gender" onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="nonbinary">Non-binary</option>
        <option value="other">Other</option>
      </select>

      {/* Gender Preference Selection */}
      <select name="preference" onChange={handleChange} required>
        <option value="">Looking for</option>
        <option value="male">Men</option>
        <option value="female">Women</option>
        <option value="any">Any</option>
      </select>

      {/* Submit Button */}
      <button type="submit">Sign Up</button>
      <Link to="/login">Already have an account? Log in</Link>
    </form>
  );
};

export default LoginForm;