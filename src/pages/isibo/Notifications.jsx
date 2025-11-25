import React, { useState } from "react";
import "../../styles/isiboPages.css";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New household added: Household A", date: "2025-11-25", read: false },
    { id: 2, message: "Report generated for this month", date: "2025-11-24", read: true },
    { id: 3, message: "Upcoming community event scheduled", date: "2025-11-28", read: false },
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const toggleRead = (id) => {
    setNotifications(
      notifications.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  return (
    <div className="isibo-page-container">
      <div className="notifications-header">
        <h1 className="isibo-title">Isibo Notifications</h1>
        <button className="btn-mark-read" onClick={markAllAsRead}>
          Mark All as Read
        </button>
      </div>

      <div className="notifications-container">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`notification-card ${notif.read ? "read" : "unread"}`}
            onClick={() => toggleRead(notif.id)}
          >
            <p className="notification-message">{notif.message}</p>
            <span className="notification-date">{notif.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
