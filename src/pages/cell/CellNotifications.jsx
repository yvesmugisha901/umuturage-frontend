import React from "react";
import "../../styles/cellPages.css";

const CellNotifications = () => {
  // Example data — in real use case, this can be dynamic
  const notifications = [
    { id: 1, message: "New isibo household update pending approval.", type: "info", time: "2 hours ago" },
    { id: 2, message: "Monthly cell report is ready for review.", type: "success", time: "1 day ago" },
    { id: 3, message: "System maintenance scheduled for tomorrow.", type: "warning", time: "3 days ago" },
    { id: 4, message: "New user registered under your cell.", type: "info", time: "5 days ago" },
  ];

  const getTypeColor = (type) => {
    switch(type) {
      case "success": return "#4caf50";
      case "warning": return "#ff9800";
      case "error": return "#f44336";
      default: return "#1c3c62"; // info/default
    }
  };

  return (
    <div className="cell-page-container">
      <h1 className="cell-title">Cell Notifications</h1>
      <p>Alerts and system messages for your cell.</p>

      <div className="notifications-list">
        {notifications.map(n => (
          <div 
            key={n.id} 
            className="notification-item"
            style={{ borderLeftColor: getTypeColor(n.type) }}
          >
            <div className="notification-message">{n.message}</div>
            <div className="notification-time">{n.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CellNotifications;
