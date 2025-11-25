import React, { useState } from "react";
import "../../styles/districtPages.css";
import { FaBell, FaTrash } from "react-icons/fa";

const sampleNotifications = [
  { id: 1, title: "New Sector Added", message: "Sector 'Gahanga' was added successfully.", time: "2 hrs ago", unread: true },
  { id: 2, title: "Monthly Report", message: "District monthly report is ready to view.", time: "1 day ago", unread: false },
  { id: 3, title: "System Alert", message: "Scheduled maintenance tomorrow at 10:00 AM.", time: "3 days ago", unread: true },
  { id: 4, title: "Reminder", message: "Update your profile information.", time: "1 week ago", unread: false },
];

const DistrictNotifications = () => {
  const [notifications, setNotifications] = useState(sampleNotifications);

  const markAsRead = (id) => {
    setNotifications(prev => prev.map(n => n.id === id ? {...n, unread: false} : n));
  };

  const deleteNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="district-page-container">
      <h1 className="district-title">District Notifications</h1>

      <div className="district-actions">
        <button className="download-btn" onClick={() => alert("All notifications cleared")}>Clear All</button>
      </div>

      <div className="notifications-container">
        {notifications.length === 0 && <p>No notifications available.</p>}
        {notifications.map(n => (
          <div
            key={n.id}
            className={`notification-card ${n.unread ? "unread" : ""}`}
          >
            <div className="notification-left">
              <FaBell className="notification-icon" />
            </div>
            <div className="notification-body">
              <h4>{n.title}</h4>
              <p>{n.message}</p>
              <span className="notification-time">{n.time}</span>
            </div>
            <div className="notification-actions">
              {n.unread && <button className="mark-read-btn" onClick={() => markAsRead(n.id)}>Mark as read</button>}
              <button className="delete-btn" onClick={() => deleteNotification(n.id)}><FaTrash /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DistrictNotifications;
