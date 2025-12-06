import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";
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
  const [reports, setReports] = useState(null);

  // Fetch reports from backend
  const fetchReports = async () => {
    try {
      const token = localStorage.getItem("token"); // adjust if you use cookies or context
      const res = await axios.get("http://localhost:5000/api/isibo/reports", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setReports(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load reports");
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  // Download PDF
  const handleDownloadPDF = () => {
    if (!reports) return;

    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Isibo Reports", 14, 20);

    const tableBody = [
      ["Total Households", reports.totalHouseholds],
      ["Total Members", reports.totalMembers],
      ["Pending Approvals", reports.pendingApprovals],
    ];

    doc.autoTable({
      startY: 30,
      head: [["Metric", "Value"]],
      body: tableBody,
      theme: "grid",
    });

    doc.save("isibo_reports.pdf");
  };

  // Download CSV
  const handleDownloadCSV = () => {
    if (!reports) return;

    const csvRows = [
      ["Metric", "Value"],
      ["Total Households", reports.totalHouseholds],
      ["Total Members", reports.totalMembers],
      ["Pending Approvals", reports.pendingApprovals],
    ];

    const csvContent =
      "data:text/csv;charset=utf-8," +
      csvRows.map((e) => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "isibo_reports.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!reports) return <p>Loading reports...</p>;

  // Chart data
  const chartData = {
    labels: reports.weeklyData.map((d) => d.week),
    datasets: [
      {
        label: "New Households",
        data: reports.weeklyData.map((d) => d.householdsAdded),
        borderColor: "#4a90e2",
        backgroundColor: "rgba(74,144,226,0.2)",
        tension: 0.4,
      },
      {
        label: "New Members",
        data: reports.weeklyData.map((d) => d.membersAdded),
        borderColor: "#50c878",
        backgroundColor: "rgba(80,200,120,0.2)",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Isibo Activity This Month",
        font: { size: 18, weight: "600" },
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
          <p>{reports.totalHouseholds}</p>
        </div>
        <div className="card">
          <h3>Total Members</h3>
          <p>{reports.totalMembers}</p>
        </div>
        <div className="card">
          <h3>Pending Updates</h3>
          <p>{reports.pendingApprovals}</p>
        </div>
      </div>

      {/* Chart Section */}
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
