import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/villagePages.css";
import { FaUsers, FaHome, FaExclamationCircle } from "react-icons/fa";

const VillageDashboard = () => {
  const [stats, setStats] = useState({
    totalHouseholds: 0,
    totalMembers: 0,
    pendingUpdates: 0,
    recentActivity: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("No token found. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(
          "http://localhost:5000/api/village/dashboard",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const data = res.data || {};
        setStats({
          totalHouseholds: Number(data.totalHouseholds) || 0,
          totalMembers: Number(data.totalMembers) || 0,
          pendingUpdates: Number(data.pendingUpdates) || 0,
          recentActivity: Array.isArray(data.recentActivity) ? data.recentActivity : [],
        });
      } catch (err) {
        console.error("Dashboard fetch error:", err);
        setError("Failed to load village dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) return <p className="loading-text">Loading dashboard...</p>;
  if (error) return <p className="error-text">{error}</p>;

  return (
    <div className="page-with-sidebar">
      <div className="dashboard-main">
        <main>
          <div className="dashboard-header">
            <h1>Village Dashboard</h1>
            <p>Overview and key metrics for the village.</p>
          </div>

          {/* Overview Cards */}
          <div className="cards-container">
            <div className="card">
              <div className="card-icon"><FaHome /></div>
              <div className="card-info">
                <h3>Total Households</h3>
                <p>{stats.totalHouseholds}</p>
              </div>
            </div>

            <div className="card">
              <div className="card-icon"><FaUsers /></div>
              <div className="card-info">
                <h3>Total Members</h3>
                <p>{stats.totalMembers}</p>
              </div>
            </div>

            <div className="card">
              <div className="card-icon"><FaExclamationCircle /></div>
              <div className="card-info">
                <h3>Pending Updates</h3>
                <p>{stats.pendingUpdates}</p>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="section">
            <h2>Statistics</h2>
            <p>Charts showing household and member distribution.</p>
            <div className="chart-placeholder">Charts will be added later</div>
          </div>

          {/* Recent Activity */}
          <div className="section">
            <h2>Recent Activity</h2>
            {stats.recentActivity.length === 0 ? (
              <p>No recent activity</p>
            ) : (
              <ul className="recent-activity">
                {stats.recentActivity.map((item, index) => (
                  <li key={index}>
                    {item.message || "No message"}{" "}
                    <span className="activity-date">
                      ({item.created_at ? new Date(item.created_at).toLocaleDateString() : "N/A"})
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default VillageDashboard;
