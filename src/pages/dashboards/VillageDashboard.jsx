// src/pages/dashboards/VillageDashboard.jsx
import React from "react";
import "../../styles/villagePages.css"; // common CSS for village pages
import { FaUsers, FaHome, FaExclamationCircle } from "react-icons/fa";

const VillageDashboard = () => {
  // Example junk data
  const totalHouseholds = 12;
  const totalMembers = 54;
  const pendingUpdates = 3;

  return (
    <div className="page-with-sidebar">
      <div className="dashboard-main">
        <main>
          <div className="dashboard-header">
            <h1>Village Dashboard</h1>
            <p>Overview and key metrics for the village.</p>
          </div>

          {/* Overview Cards */}
          <div className="cards-container">
            <div className="card">
              <div className="card-icon">
                <FaHome />
              </div>
              <div className="card-info">
                <h3>Total Households</h3>
                <p>{totalHouseholds}</p>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <FaUsers />
              </div>
              <div className="card-info">
                <h3>Total Members</h3>
                <p>{totalMembers}</p>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <FaExclamationCircle />
              </div>
              <div className="card-info">
                <h3>Pending Updates</h3>
                <p>{pendingUpdates}</p>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="section">
            <h2>Statistics</h2>
            <p>Charts showing household and member distribution.</p>
            <div className="chart-placeholder">
              [Chart Placeholder - You can integrate Chart.js or Recharts later]
            </div>
          </div>

          {/* Recent Activity */}
          <div className="section">
            <h2>Recent Activity</h2>
            <ul className="recent-activity">
              <li>New household added: Household A</li>
              <li>Household B updated with 3 new members</li>
              <li>Pending verification for Household C</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VillageDashboard;
