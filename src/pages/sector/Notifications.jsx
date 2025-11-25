import React, { useState } from "react";
import "../../styles/sectorPages.css";

const dummyNotifications = [
  { id: 1, title: "New Household Added", message: "A new household was added in Sector A.", date: "2025-11-25", read: false },
  { id: 2, title: "Report Submitted", message: "Cell B submitted their weekly report.", date: "2025-11-24", read: true },
  { id: 3, title: "Maintenance Alert", message: "System maintenance scheduled for tomorrow.", date: "2025-11-23", read: false },
  { id: 4, title: "Old Notification", message: "This notification is archived.", date: "2025-10-30", read: true, archived: true }
];

const SectorNotifications = () => {
  const [notifications, setNotifications] = useState(dummyNotifications);

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  return (
    <div className="sector-page-container">
      <h1 className="sector-title">Sector Notifications</h1>

      <div className="notifications-list">
        {notifications.filter(n => !n.archived).map(n => (
          <div key={n.id} className={`notification-card ${n.read ? "read" : "unread"}`}>
            <div className="notification-header">
              <h4>{n.title}</h4>
              {!n.read && <span className="badge">New</span>}
            </div>
            <p>{n.message}</p>
            <small>{n.date}</small>
            {!n.read && <button className="mark-read-btn" onClick={() => markAsRead(n.id)}>Mark as read</button>}
          </div>
        ))}
      </div>

      <div className="archived-section">
        <h3>Archived Notifications</h3>
        {notifications.filter(n => n.archived).map(n => (
          <div key={n.id} className="notification-card archived">
            <div className="notification-header">
              <h4>{n.title}</h4>
            </div>
            <p>{n.message}</p>
            <small>{n.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectorNotifications;
