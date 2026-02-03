import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/home.css";

const heroImages = [
  "https://images.pexels.com/photos/34222333/pexels-photo-34222333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920",
  "https://images.pexels.com/photos/33419534/pexels-photo-33419534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920",
  "https://images.pexels.com/photos/33763195/pexels-photo-33763195.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920"
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${heroImages[currentSlide]})`,
        }}
      >
        <div className="hero-slider">
          {/* Floating shapes */}
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>

          {/* Overlay & Text */}
          <div className="hero-overlay">
            <div className="hero-text">
              <h1 className="parallax hero-title">Umuturage Connect</h1>
              <p className="parallax hero-subtitle">
                Seamlessly manage households, monitor community data, and empower local governance.
              </p>
              <Link to="/register" className="cta-btn hero-btn">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="objectives-section">
        <h2 className="section-title">Why Choose Umuturage Connect?</h2>
        <div className="objectives-container">
          <div className="objective-card">
            <h3>Efficiency</h3>
            <p>Quickly manage household data and streamline administrative tasks.</p>
          </div>
          <div className="objective-card">
            <h3>Accuracy</h3>
            <p>Reliable reporting and analytics for better decision making.</p>
          </div>
          <div className="objective-card">
            <h3>Support</h3>
            <p>Dedicated assistance to ensure smooth operations for all users.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Our Key Features</h2>
        <div className="features-container">
          <div className="feature-card">
            <img
              src="https://img.icons8.com/ios/100/4f46e5/home-page.png"
              alt="Households"
              className="feature-icon"
            />
            <h3>Households Management</h3>
            <p>Track household details efficiently and easily.</p>
          </div>
          <div className="feature-card">
            <img
              src="https://img.icons8.com/ios/100/4f46e5/combo-chart--v1.png"
              alt="Reports"
              className="feature-icon"
            />
            <h3>Reports & Analytics</h3>
            <p>Generate insightful reports in seconds.</p>
          </div>
          <div className="feature-card">
            <img
              src="https://img.icons8.com/ios/100/4f46e5/customer-support.png"
              alt="Support"
              className="feature-icon"
            />
            <h3>Support System</h3>
            <p>Quick support and assistance for all users.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Start Managing Your Community Today</h2>
          <p>
            Join hundreds of users benefiting from streamlined household management and real-time data insights.
          </p>
          <Link to="/register" className="cta-btn">
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
