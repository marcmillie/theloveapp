// src/components/UserPreferences.jsx
import React from "react";
import "./../styles/UserPreferences.css";

const UserPreferences = ({ preferences, setPreferences }) => {
  const handleChange = (e) => {
    const { value, checked } = e.target;
    const updated = checked
      ? [...preferences, value]
      : preferences.filter((pref) => pref !== value);
    setPreferences(updated);
  };

  return (
    <div className="preferences-container">
      <h3>Select Gender Preferences:</h3>
      <label>
        <input
          type="checkbox"
          value="Male"
          checked={preferences.includes("Male")}
          onChange={handleChange}
        />
        Male
      </label>
      <label>
        <input
          type="checkbox"
          value="Female"
          checked={preferences.includes("Female")}
          onChange={handleChange}
        />
        Female
      </label>
      <label>
        <input
          type="checkbox"
          value="Non-binary"
          checked={preferences.includes("Non-binary")}
          onChange={handleChange}
        />
        Non-binary
      </label>
    </div>
  );
};

export default UserPreferences;