import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const quickLinks = [
    { to: "/", label: "Home", kiny: "Ahabanza" },
    { to: "/features", label: "Features", kiny: "Ibikorwa" },
    { to: "/households", label: "Households", kiny: "Ingo" },
    { to: "/about", label: "About Us", kiny: "Ibyacu" },
    { to: "/contact", label: "Contact", kiny: "Twandikire" },
  ];

  const legalLinks = [
    { to: "/terms", label: "Terms & Conditions" },
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/cookies", label: "Cookie Policy" },
    { to: "/accessibility", label: "Accessibility" },
  ];

  return (
    <footer className="footer">

      {/* Top Wave Divider */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Footer Main */}
      <div className="footer-main">
        <div className="footer-container">

          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="Umuturage Connect"
                />
              </div>
              <div className="footer-logo-text">
                <span className="footer-logo-main">Umuturage</span>
                <span className="footer-logo-sub">Connect</span>
              </div>
            </Link>

            <p className="footer-description">
              Rwanda's leading platform for modern community management.
              Empowering local leaders with real-time data, security tracking,
              and well-being monitoring.
            </p>

            <p className="footer-description-kiny">
              Urubuga rw'u Rwanda rwo gucunga imirimo y'abaturage.
            </p>

            {/* Newsletter */}
            <div className="footer-newsletter">
              <h5 className="newsletter-title">
                Stay Updated • Komeza Kumenyeshwa
              </h5>
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">
                  {subscribed ? "✓ Done!" : "Subscribe"}
                </button>
              </form>
              {subscribed && (
                <p className="newsletter-success">
                  ✓ Thank you! Murakoze kwiyandikisha!
                </p>
              )}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 className="footer-heading">
              Quick Links
              <span className="heading-kiny">Iyunguruzo Ihuse</span>
            </h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer-link">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    <div>
                      <span className="link-main">{link.label}</span>
                      <span className="link-kiny">{link.kiny}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact Column */}
          <div className="footer-col">

            <h4 className="footer-heading">
              Legal
              <span className="heading-kiny">Amategeko</span>
            </h4>

            <ul className="footer-links">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer-link">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    <div>
                      <span className="link-main">{link.label}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="footer-heading" style={{ marginTop: "32px" }}>
              Contact
              <span className="heading-kiny">Twandikire</span>
            </h4>

            <ul className="contact-list">

              <li className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-details">
                  <span className="contact-main">Kigali, Rwanda</span>
                  <span className="contact-sub">KN 5 Road, Kicukiro</span>
                </div>
              </li>

              <li className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-details">
                  <a href="mailto:info@umuturage.rw" className="contact-main contact-link">
                    info@umuturage.rw
                  </a>
                  <span className="contact-sub">We reply within 24hrs</span>
                </div>
              </li>

              <li className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-details">
                  <a href="tel:+250781234567" className="contact-main contact-link">
                    +250 781 234 567
                  </a>
                  <span className="contact-sub">Mon–Fri, 8am–6pm</span>
                </div>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">

          {/* Copyright */}
          <div className="footer-copyright">
            <p>© 2026 <strong>Umuturage Connect</strong>. All rights reserved.</p>
            <p className="copyright-kiny">Uburenganzira bwose burabitswe.</p>
          </div>

          {/* Social Buttons */}
          <div className="footer-social">
            <button className="social-btn" aria-label="Facebook">
              <FaFacebook />
            </button>
            <button className="social-btn" aria-label="X Twitter">
              <FaXTwitter />
            </button>
            <button className="social-btn" aria-label="Instagram">
              <FaInstagram />
            </button>
            <button className="social-btn" aria-label="LinkedIn">
              <FaLinkedinIn />
            </button>
            <button className="social-btn" aria-label="YouTube">
              <FaYoutube />
            </button>
          </div>

          {/* Made in Rwanda */}
          <div className="footer-made">
            <span>Designed for Rwanda's Communities</span>
            <span className="made-kiny">Bikozwe ku bw'abaturage b'u Rwanda</span>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
