import React, { useEffect, useState } from "react";
import "../../styles/villagePages.css";

const VillageNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(""); // track errors

  const fetchNotifications = async () => {
    setLoading(true);
    setError(""); // reset previous errors

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No authentication token found. Please login.");
      }

      const res = await fetch("http://localhost:5000/api/village/notifications", {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      setNotifications(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch notifications:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div className="village-page-container">
      <h1 className="village-title">Village Notifications</h1>

      {loading && <p>Loading notifications...</p>}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!loading && !error && notifications.length === 0 && (
        <p>No notifications yet.</p>
      )}

      {!loading && !error && notifications.length > 0 && (
        <ul>
          {notifications.map((note) => (
            <li key={note.id} className="village-notification-item">
              {note.isibo_name ? `📌 [${note.isibo_name}] ` : ""}
              {note.message}
              <span style={{ color: "#888", marginLeft: "10px" }}>
                ({new Date(note.created_at).toLocaleDateString()})
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VillageNotifications;
