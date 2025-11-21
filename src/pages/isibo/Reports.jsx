// src/pages/dashboards/isibo/Reports.jsx
import React from "react";
import "../../styles/isiboDashboard.css";

const Reports = () => {
  return (
    <div className="section">
      <h2>Reports</h2>
      <p>View Isibo reports here.</p>

      <div className="cards-container">
        <div className="card">
          <h3>Total Households</h3>
          <p>23</p>
        </div>
        <div className="card">
          <h3>Total Members</h3>
          <p>105</p>
        </div>
      </div>
    </div>
  );
};

export default Reports;
