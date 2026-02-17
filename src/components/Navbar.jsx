import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState("EN");
  const location = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenu]);

  const navLinks = [
    { to: "/", label: "Home", kiny: "Ahabanza" },
    { to: "/features", label: "Features", kiny: "Ibikorwa" },
    { to: "/households", label: "Households", kiny: "Ingo" },
    { to: "/about", label: "About", kiny: "Ibyacu" },
    { to: "/contact", label: "Contact", kiny: "Twandikire" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">

          {/* Logo */}
          <Link to="/" className="logo">
            <div className="logo-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Umuturage Connect"
                className="logo-img"
              />
            </div>
            <div className="logo-text">
              <span className="logo-main">Umuturage</span>
              <span className="logo-sub">Connect</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.to} className="nav-item">
                <Link
                  to={link.to}
                  className={`nav-link ${location.pathname === link.to ? "active-link" : ""}`}
                >
                  <span className="link-label">{link.label}</span>
                  <span className="link-kiny">{link.kiny}</span>
                  <span className="link-underline"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="nav-actions">

            {/* Language Switcher */}
            <div className="language-switcher">
              <button
                className={`lang-btn ${language === "EN" ? "lang-active" : ""}`}
                onClick={() => setLanguage("EN")}
              >EN</button>
              <span className="lang-divider" />
              <button
                className={`lang-btn ${language === "RW" ? "lang-active" : ""}`}
                onClick={() => setLanguage("RW")}
              >RW</button>
            </div>

            {/* Login Button */}
            <Link to="/login" className="nav-btn login-btn">
              <svg width="30" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                <polyline points="10 17 15 12 10 7"/>
                <line x1="15" y1="12" x2="3" y2="12"/>
              </svg>
              <span>Login</span>
            </Link>

            {/* Register Button */}
            <Link to="/register" className="nav-btn register-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="8.5" cy="7" r="4"/>
                <line x1="20" y1="8" x2="20" y2="14"/>
                <line x1="23" y1="11" x2="17" y2="11"/>
              </svg>
              <span>Register</span>
            </Link>

            {/* Hamburger */}
            <button
              className={`hamburger ${mobileMenu ? "open" : ""}`}
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Toggle menu"
            >
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay ${mobileMenu ? "active" : ""}`}
        onClick={() => setMobileMenu(false)}
      />

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenu ? "open" : ""}`}>

        {/* Drawer Header */}
        <div className="drawer-header">
          <Link to="/" className="logo" onClick={() => setMobileMenu(false)}>
            <div className="logo-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Logo"
                className="logo-img"
              />
            </div>
            <div className="logo-text">
              <span className="logo-main">Umuturage</span>
              <span className="logo-sub">Connect</span>
            </div>
          </Link>
          <button className="close-btn" onClick={() => setMobileMenu(false)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <ul className="mobile-links">
          {navLinks.map((link, index) => (
            <li
              key={link.to}
              className="mobile-link-item"
              style={{ animationDelay: `${index * 0.07}s` }}
            >
              <Link
                to={link.to}
                className={`mobile-link ${location.pathname === link.to ? "mobile-active" : ""}`}
                onClick={() => setMobileMenu(false)}
              >
                <div className="mobile-link-text">
                  <span className="mobile-link-label">{link.label}</span>
                  <span className="mobile-link-kiny">{link.kiny}</span>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </li>
          ))}
        </ul>

        {/* Drawer Actions */}
        <div className="drawer-actions">
          <Link
            to="/login"
            className="drawer-btn drawer-login"
            onClick={() => setMobileMenu(false)}
          >
            Login • Injira
          </Link>
          <Link
            to="/register"
            className="drawer-btn drawer-register"
            onClick={() => setMobileMenu(false)}
          >
            Get Started • Tangira
          </Link>
        </div>

        {/* Drawer Language */}
        <div className="drawer-language">
          <p className="drawer-lang-label">Language • Ururimi</p>
          <div className="drawer-lang-btns">
            <button
              className={`drawer-lang-btn ${language === "EN" ? "lang-active" : ""}`}
              onClick={() => setLanguage("EN")}
            >
              🌐 English
            </button>
            <button
              className={`drawer-lang-btn ${language === "RW" ? "lang-active" : ""}`}
              onClick={() => setLanguage("RW")}
            >
              🇷🇼 Kinyarwanda
            </button>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="drawer-footer">
          <p>© 2026 Umuturage Connect</p>
          <p>Designed for Rwanda's Communities</p>
        </div>

      </div>
    </>
  );
};

export default Navbar;