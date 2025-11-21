import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/logout.css";

const Logout = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/dashboard"); // redirect to dashboard
  };

  const handleLogout = () => {
    // Here later we will clear auth tokens / session
    // For now just redirect to login page
    navigate("/login");
  };

  return (
    <div className="logout-container">
      <div className="logout-card">
        <h2>Logout</h2>
        <p>Are you sure you want to log out?</p>

        <div className="buttons">
          <button className="btn cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
