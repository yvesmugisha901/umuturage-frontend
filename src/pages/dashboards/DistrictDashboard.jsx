import React, { useState } from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import "../../styles/districtDashboard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const DistrictDashboard = () => {
  const [districtData, setDistrictData] = useState({
    name: "Gasabo District",
    totalPopulation: 52340,
    totalHouseholds: 10230,
    totalSectors: 15,
    activeReports: 8,
  });

  const [activities, setActivities] = useState([
    { date: "2025-11-10", activity: "Added new sector ‘Kacyiru’", status: "✅ Completed" },
    { date: "2025-11-09", activity: "Updated household data", status: "🔄 In progress" },
    { date: "2025-11-08", activity: "Generated monthly report", status: "✅ Completed" },
  ]);

  // Pending approvals from lower levels
  const [pendingApprovals, setPendingApprovals] = useState([
    { id: 1, type: "Household", submittedBy: "Cell Leader", message: "New household data submitted", status: "pending" },
    { id: 2, type: "Report", submittedBy: "Sector Officer", message: "Monthly report submitted", status: "pending" },
  ]);

  // Charts
  const populationChart = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Population Growth",
        data: [50000, 50500, 51000, 51500, 52000, districtData.totalPopulation],
        fill: false,
        backgroundColor: "#1a73e8",
        borderColor: "#1a73e8",
      },
    ],
  };

  const householdChart = {
    labels: ["Households", "Active Reports", "Sectors"],
    datasets: [
      {
        label: "Distribution",
        data: [districtData.totalHouseholds, districtData.activeReports, districtData.totalSectors],
        backgroundColor: ["#1a73e8", "#34a853", "#fbbc04"],
      },
    ],
  };

  const handleApproval = (id, decision) => {
    setPendingApprovals((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: decision } : item))
    );
  };

  return (
    <div className="district-dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <h1>{districtData.name}</h1>
        <p>Overview of households, sectors, and community performance</p>
      </header>

      {/* KPI Cards */}
      <section className="cards-container">
        <div className="card blue clickable" onClick={() => alert("Go to Population Details")}>
          <h3>Total Population</h3>
          <p>{districtData.totalPopulation.toLocaleString()}</p>
        </div>
        <div className="card green clickable" onClick={() => alert("Go to Households")}>
          <h3>Total Households</h3>
          <p>{districtData.totalHouseholds.toLocaleString()}</p>
        </div>
        <div className="card orange clickable" onClick={() => alert("Go to Sectors")}>
          <h3>Total Sectors</h3>
          <p>{districtData.totalSectors}</p>
        </div>
        <div className="card purple clickable" onClick={() => alert("Go to Reports")}>
          <h3>Active Reports</h3>
          <p>{districtData.activeReports}</p>
        </div>
      </section>

      {/* Charts */}
      <section className="charts-section">
        <div className="chart-placeholder">
          <h4>Population Growth</h4>
          <div className="chart-box">
            <Line data={populationChart} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
        <div className="chart-placeholder">
          <h4>Household Distribution</h4>
          <div className="chart-box">
            <Doughnut data={householdChart} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </section>

      {/* Pending Approvals */}
      <section className="pending-approvals">
        <h2>Pending Approvals</h2>
        {pendingApprovals.length === 0 ? (
          <p>No pending submissions</p>
        ) : (
          <table className="approvals-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Submitted By</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingApprovals.map((item) => (
                <tr key={item.id}>
                  <td>{item.type}</td>
                  <td>{item.submittedBy}</td>
                  <td>{item.message}</td>
                  <td>
                    {item.status === "pending" ? (
                      <>
                        <button onClick={() => handleApproval(item.id, "approved")}>✅ Approve</button>
                        <button onClick={() => handleApproval(item.id, "rejected")}>❌ Reject</button>
                      </>
                    ) : (
                      <span className={item.status}>{item.status.toUpperCase()}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* Recent Activities */}
      <section className="activities-section">
        <h2>Recent Activities</h2>
        <table className="activities-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Activity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.activity}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <button className="action-btn">➕ Add Sector</button>
          <button className="action-btn">📝 View Reports</button>
          <button className="action-btn">👥 Manage Households</button>
        </div>
      </section>
    </div>
  );
};

export default DistrictDashboard;
