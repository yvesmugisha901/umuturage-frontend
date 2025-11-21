import React from "react";
import "../../styles/DashboardContent.css";

const CellNotifications = () => {
  return (
    <div className="page-with-sidebar">
      <div className="dashboard-main">
        <main>
          <div className="dashboard-header">
            <h1>Notifications</h1>
            <p>Alerts and system messages for the cell.</p>
          </div>

          <div className="section">
            <h2>Recent Notifications</h2>

            <ul style={{ listStyle: "none", padding: 0 }}>
              <li className="notification-item">
                ✔️ New isibo household update pending approval.
              </li>
              <li className="notification-item">
                📌 Monthly cell report is ready for review.
              </li>
            </ul>
          </div>

        </main>
      </div>
    </div>
  );
};

export default CellNotifications;
