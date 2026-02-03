import React, { useState } from "react";
import "../styles/navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMobileMenu(!mobileMenu);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo with hover animation */}
        <div className="logo">
          <Link to="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Abaturage Logo"
              className="logo-img"
            />
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={mobileMenu ? "bar rotate1" : "bar"}></span>
          <span className={mobileMenu ? "bar fade" : "bar"}></span>
          <span className={mobileMenu ? "bar rotate2" : "bar"}></span>
        </div>

        {/* Navigation Links */}
        <ul className={mobileMenu ? "nav-links active" : "nav-links"}>
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "active-link" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className={location.pathname === "/features" ? "active-link" : ""}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/households"
              className={location.pathname === "/households" ? "active-link" : ""}
            >
              Households
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active-link" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active-link" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Right-side actions */}
        <div className="nav-actions">
          <Link to="/login" className="nav-btn login-btn">
            Login
          </Link>
          <Link to="/register" className="nav-btn register-btn">
            Register
          </Link>
          <select className="language-selector">
            <option value="en">EN</option>
            <option value="rw">RW</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
