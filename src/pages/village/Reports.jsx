// src/pages/village/Reports.jsx
import React, { useEffect, useState } from "react";
import "../../styles/villagePages.css";

const VillageReports = () => {
  const [data, setData] = useState({
    totalHouseholds: 0,
    totalMembers: 0,
    recentActivity: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(""); // Track errors

  const fetchReports = async () => {
    try {
      setLoading(true);
      setError("");
      const token = localStorage.getItem("token");

      // Use full backend URL to avoid JSON parse errors
      const res = await fetch("http://localhost:5000/api/village/reports", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const json = await res.json();

      // Ensure the response matches expected structure
      setData({
        totalHouseholds: json.totalHouseholds || 0,
        totalMembers: json.totalMembers || 0,
        recentActivity: Array.isArray(json.recentActivity) ? json.recentActivity : [],
      });
    } catch (err) {
      console.error("Failed to fetch village reports:", err);
      setError("Failed to load village reports. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  if (loading) return <p className="loading-text">Loading reports...</p>;
  if (error) return <p className="error-text">{error}</p>;

  return (
    <div className="village-page-container">
      <h1 className="village-title">Village Reports</h1>

      <div className="village-cards-container">
        <div className="village-card">
          <h3>Total Households</h3>
          <p>{data.totalHouseholds}</p>
          <div className="village-chart-placeholder">[Household Chart]</div>
        </div>
        <div className="village-card">
          <h3>Total Members</h3>
          <p>{data.totalMembers}</p>
          <div className="village-chart-placeholder">[Members Chart]</div>
        </div>
      </div>

      <div className="village-section">
        <h2>Recent Activity</h2>
        {data.recentActivity.length === 0 ? (
          <p>No recent activity</p>
        ) : (
          <ul>
            {data.recentActivity.map((item, index) => (
              <li key={index} className="village-notification-item">
                {item.message}{" "}
                <span className="activity-date">
                  ({new Date(item.created_at).toLocaleDateString()})
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default VillageReports;
