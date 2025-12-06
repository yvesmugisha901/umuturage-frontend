import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/isiboPages.css";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  // Fetch notifications from backend
  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem("token"); // your JWT token
      const res = await axios.get("http://localhost:5000/api/isibo/notifications", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotifications(res.data.notifications);
    } catch (error) {
      console.error(error);
      alert("Failed to load notifications");
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  // Mark all notifications as read locally and on server
  const markAllAsRead = async () => {
    try {
      const token = localStorage.getItem("token");
      await Promise.all(
        notifications
          .filter(n => n.status !== "read")
          .map(n =>
            axios.put(
              `http://localhost:5000/api/isibo/notifications/${n.id}/read`,
              {},
              { headers: { Authorization: `Bearer ${token}` } }
            )
          )
      );
      // Update local state
      setNotifications(notifications.map(n => ({ ...n, status: "read" })));
    } catch (error) {
      console.error(error);
      alert("Failed to mark all as read");
    }
  };

  // Toggle a single notification to read
  const toggleRead = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:5000/api/isibo/notifications/${id}/read`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setNotifications(
        notifications.map(n =>
          n.id === id ? { ...n, status: "read" } : n
        )
      );
    } catch (error) {
      console.error(error);
      alert("Failed to mark notification as read");
    }
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
        {notifications.length === 0 ? (
          <p>No notifications yet</p>
        ) : (
          notifications.map((notif) => (
            <div
              key={notif.id}
              className={`notification-card ${notif.status === "read" ? "read" : "unread"}`}
              onClick={() => toggleRead(notif.id)}
            >
              <p className="notification-message">{notif.message}</p>
              <span className="notification-date">
                {new Date(notif.created_at || notif.date).toLocaleDateString()}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notifications;
