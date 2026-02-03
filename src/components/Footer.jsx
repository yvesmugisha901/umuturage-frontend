import React from "react";
import "../styles/footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Reach Out</h4>
          <ul className="contact-info">
            <li><FaMapMarkerAlt /> Kigali, Rwanda</li>
            <li><FaEnvelope /> info@umuturage.rw</li>
            <li><FaPhone /> +250 781 234 567</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Language Selector */}
        <div className="footer-section">
          <h4>Language</h4>
          <select className="language-selector">
            <option value="en">English</option>
            <option value="rw">Kinyarwanda</option>
          </select>
        </div>

      </div>

      <div className="footer-bottom">
        &copy; 2026 Umuturage Management System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
