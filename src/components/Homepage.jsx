import React from "react";
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <h1>Welcome to Love and Loyalty</h1>
        <p>Fast-paced, real connections — 60 seconds at a time.</p>
        <a href="#login" className="cta-button">Get Started</a>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Set Your Preferences</h3>
            <p>Pick who you’d like to match with.</p>
          </div>
          <div className="step">
            <h3>2. Start Speed Dating</h3>
            <p>Chat with matches for 60 seconds each.</p>
          </div>
          <div className="step">
            <h3>3. Make a Connection</h3>
            <p>Like what you see? Choose to continue or move on.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;