import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-socials">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><img src="https://via.placeholder.com/40?text=FB" alt="Facebook" /></a>
            <a href="#"><img src="https://via.placeholder.com/40?text=TW" alt="Twitter" /></a>
            <a href="#"><img src="https://via.placeholder.com/40?text=IG" alt="Instagram" /></a>
          </div>
        </div>

        {/* Language Selector */}
        <div className="footer-language">
          <h4>Language</h4>
          <select className="language-selector">
            <option value="en">English</option>
            <option value="rw">Kinyarwanda</option>
          </select>
        </div>

      </div>

      <div className="footer-bottom">
        &copy; 2025 Umuturage Management System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
