import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom"; // ✅ Import Link

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img
            src="https://via.placeholder.com/150x50?text=LOGO"
            alt="Umuturage Logo"
          />
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Households</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* Right side buttons */}
        <div className="nav-actions">
          <Link
            to="/login"
            className="login-btn"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="register-btn"
          >
            Register
          </Link>

          {/* Language selector */}
          <select className="language-selector">
            <option value="en">EN</option>
            <option value="rw">Kinyarwanda</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
