import React, { useEffect, useState } from "react";
import "../../styles/villagePages.css";

const VillageReports = () => {
  const [data, setData] = useState({
    totalHouseholds: 0,
    totalMembers: 0,
    approvedHouseholds: 0,
    pendingHouseholds: 0,
    rejectedHouseholds: 0,
    isiboBreakdown: [],
    recentActivity: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchReports = async () => {
    try {
      setLoading(true);
      setError("");
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/api/village/reports", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const json = await res.json();

      setData({
        totalHouseholds: json.totalHouseholds || 0,
        totalMembers: json.totalMembers || 0,
        approvedHouseholds: json.approvedHouseholds || 0,
        pendingHouseholds: json.pendingHouseholds || 0,
        rejectedHouseholds: json.rejectedHouseholds || 0,
        isiboBreakdown: Array.isArray(json.isiboBreakdown) ? json.isiboBreakdown : [],
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

      {/* Overview Cards */}
      <div className="village-cards-container">
        <div className="village-card">
          <h3>Total Households</h3>
          <p className="village-card-number">{data.totalHouseholds}</p>
        </div>
        <div className="village-card">
          <h3>Total Members</h3>
          <p className="village-card-number">{data.totalMembers}</p>
        </div>
        <div className="village-card" style={{ background: "#d4edda" }}>
          <h3>Approved</h3>
          <p className="village-card-number">{data.approvedHouseholds}</p>
        </div>
        <div className="village-card" style={{ background: "#fff3cd" }}>
          <h3>Pending</h3>
          <p className="village-card-number">{data.pendingHouseholds}</p>
        </div>
        <div className="village-card" style={{ background: "#f8d7da" }}>
          <h3>Rejected</h3>
          <p className="village-card-number">{data.rejectedHouseholds}</p>
        </div>
      </div>

      {/* Isibo Breakdown */}
      <div className="village-section">
        <h2>Breakdown by Isibo</h2>
        {data.isiboBreakdown.length === 0 ? (
          <p>No data available</p>
        ) : (
          <table className="village-data-table">
            <thead>
              <tr>
                <th>Isibo Name</th>
                <th>Total Households</th>
                <th>Total Members</th>
                <th>Approved</th>
                <th>Pending</th>
                <th>Rejected</th>
              </tr>
            </thead>
            <tbody>
              {data.isiboBreakdown.map((isibo, index) => (
                <tr key={index}>
                  <td>{isibo.isibo_name}</td>
                  <td>{isibo.total_households}</td>
                  <td>{isibo.total_members}</td>
                  <td>{isibo.approved}</td>
                  <td>{isibo.pending}</td>
                  <td>{isibo.rejected}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Recent Activity */}
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