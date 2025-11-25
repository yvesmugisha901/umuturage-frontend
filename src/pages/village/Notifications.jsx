// src/pages/village/Notifications.jsx
import React from "react";
import "../../styles/villagePages.css";

const VillageNotifications = () => {
  return (
    <div className="village-page-container">
      <h1 className="village-title">Village Notifications</h1>

      <ul>
        <li className="village-notification-item">✔️ New household added: Household X</li>
        <li className="village-notification-item">📌 Monthly report ready</li>
        <li className="village-notification-item">⚠️ Upcoming village event on 30 Nov 2025</li>
        <li className="village-notification-item">✔️ Isibo B data approved</li>
      </ul>
    </div>
  );
};

export default VillageNotifications;
