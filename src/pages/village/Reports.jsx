// src/pages/village/Reports.jsx
import React from "react";
import "../../styles/villagePages.css";

const VillageReports = () => {
  return (
    <div className="village-page-container">
      <h1 className="village-title">Village Reports</h1>

      <div className="village-cards-container">
        <div className="village-card">
          <h3>Total Households</h3>
          <p>134</p>
          <div className="village-chart-placeholder">[Household Chart]</div>
        </div>
        <div className="village-card">
          <h3>Total Members</h3>
          <p>567</p>
          <div className="village-chart-placeholder">[Members Chart]</div>
        </div>
      </div>

      <div className="village-section">
        <h2>Recent Activity</h2>
        <ul>
          <li className="village-notification-item">✔️ Household A added</li>
          <li className="village-notification-item">📌 Monthly report generated</li>
          <li className="village-notification-item">⚠️ Isibo C data pending approval</li>
        </ul>
      </div>
    </div>
  );
};

export default VillageReports;
