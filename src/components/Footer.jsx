import React from "react";
import "../styles/Footer.css"; // Styling file

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Love and Loyalty. All rights reserved.</p>
    </footer>
  );
};

export default Footer;