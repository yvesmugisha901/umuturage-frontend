import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <h1>Welcome to Umuturage Connect</h1>
          <p>
            Efficiently manage households, track data, and support your community.
          </p>
          <Link to="/register" className="cta-btn">
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Our Key Features</h2>
        <div className="features-container">
          <div className="feature-card">
            <div className="icon-wrapper">
              <img
                src="https://img.icons8.com/ios/100/ffffff/home-page.png"
                alt="Households"
              />
            </div>
            <h3>Households Management</h3>
            <p>Track household details efficiently and easily.</p>
          </div>
          <div className="feature-card">
            <div className="icon-wrapper">
              <img
                src="https://img.icons8.com/ios/100/ffffff/combo-chart--v1.png"
                alt="Reports"
              />
            </div>
            <h3>Reports & Analytics</h3>
            <p>Generate insightful reports in seconds.</p>
          </div>
          <div className="feature-card">
            <div className="icon-wrapper">
              <img
                src="https://img.icons8.com/ios/100/ffffff/customer-support.png"
                alt="Support"
              />
            </div>
            <h3>Support System</h3>
            <p>Quick support and assistance for all users.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Start Managing Your Community Today</h2>
        <p>
          Join hundreds of users benefiting from streamlined household management.
        </p>
        <Link to="/register" className="cta-btn">
          Sign Up Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
