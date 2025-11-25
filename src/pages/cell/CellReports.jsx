import React from "react";
import "../../styles/cellPages.css";
import { FaChartBar, FaUsers, FaExclamationCircle, FaDownload } from "react-icons/fa";

const CellReports = () => {
  // Example metrics — replace with dynamic data later
  const metrics = [
    { id: 1, title: "Total Isibos", value: 12, icon: <FaUsers />, color: "#1c3c62" },
    { id: 2, title: "Total Households", value: 543, icon: <FaChartBar />, color: "#4caf50" },
    { id: 3, title: "Pending Updates", value: 9, icon: <FaExclamationCircle />, color: "#ff9800" },
  ];

  const handleDownloadPDF = () => {
    alert("PDF download triggered");
  };

  const handleDownloadCSV = () => {
    alert("CSV download triggered");
  };

  return (
    <div className="cell-page-container">
      <h1 className="cell-title">Cell Reports</h1>
      <p>Overview and analytics for all isibos in the cell.</p>

      {/* Download Buttons */}
      <div className="report-actions">
        <button className="download-btn" onClick={handleDownloadPDF}>
          <FaDownload /> Download PDF
        </button>
        <button className="download-btn" onClick={handleDownloadCSV}>
          <FaDownload /> Download CSV
        </button>
      </div>

      <div className="cards-container">
        {metrics.map(m => (
          <div key={m.id} className="report-card" style={{ borderLeftColor: m.color }}>
            <div className="card-icon">{m.icon}</div>
            <div className="card-content">
              <h3>{m.title}</h3>
              <p>{m.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>Recent Activity</h2>
        <p>Detailed reports and activity logs will be integrated here soon.</p>
      </div>
    </div>
  );
};

export default CellReports;
