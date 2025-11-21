// src/pages/dashboards/isibo/Notifications.jsx
import React from "react";
import "../../styles/isiboDashboard.css";

const Notifications = () => {
  return (
    <div className="section">
      <h2>Notifications</h2>
      <p>All notifications related to this Isibo.</p>

      <ul className="data-table">
        <li>New household added: Household A</li>
        <li>Report generated for this month</li>
        <li>Notification about upcoming event</li>
      </ul>
    </div>
  );
};

export default Notifications;
