import React from "react";
import { FaDownload } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import "../../styles/isiboPages.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Reports = () => {

  const handleDownloadPDF = () => alert("PDF download triggered");
  const handleDownloadCSV = () => alert("CSV download triggered");

  // Example chart data
  const chartData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "New Households",
        data: [5, 3, 7, 4],
        borderColor: "#4a90e2",
        backgroundColor: "rgba(74,144,226,0.2)",
        tension: 0.4,
      },
      {
        label: "New Members",
        data: [20, 15, 25, 18],
        borderColor: "#50c878",
        backgroundColor: "rgba(80,200,120,0.2)",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Isibo Activity This Month",
        font: {
          size: 18,
          weight: "600",
        },
      },
    },
  };

  return (
    <div className="isibo-page-container">
      <div className="isibo-header">
        <h1 className="isibo-title">Isibo Reports</h1>
        <p>Overview and analytics for all households in this Isibo.</p>
      </div>

      {/* Download Actions */}
      <div className="isibo-actions">
        <button className="download-btn" onClick={handleDownloadPDF}>
          <FaDownload /> Download PDF
        </button>
        <button className="download-btn" onClick={handleDownloadCSV}>
          <FaDownload /> Download CSV
        </button>
      </div>

      {/* Overview Cards */}
      <div className="cards-container">
        <div className="card">
          <h3>Total Households</h3>
          <p>23</p>
        </div>
        <div className="card">
          <h3>Total Members</h3>
          <p>105</p>
        </div>
        <div className="card">
          <h3>Pending Updates</h3>
          <p>4</p>
        </div>
      </div>

      {/* Recent Activity Section with Chart */}
      <div className="section">
        <h2>Recent Activity</h2>
        <p>Track new households and members added this month.</p>
        <div className="chart-container">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Reports;
