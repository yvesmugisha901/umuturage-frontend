import React from "react";
import "../../styles/sectorPages.css";
import { FaDownload } from "react-icons/fa";

const SectorReports = () => {
  const handleDownloadPDF = () => {
    alert("PDF download triggered");
  };

  const handleDownloadCSV = () => {
    alert("CSV download triggered");
  };

  return (
    <div className="sector-page-container">
      <h1 className="sector-title">Sector Reports</h1>

      {/* Download Actions */}
      <div className="sector-actions">
        <button className="download-btn" onClick={handleDownloadPDF}>
          <FaDownload /> Download PDF
        </button>
        <button className="download-btn" onClick={handleDownloadCSV}>
          <FaDownload /> Download CSV
        </button>
      </div>

      {/* Overview Cards */}
      <div className="sector-card">
        <h3>Population Report</h3>
        <p>Summary of population data, including demographics and trends for this sector.</p>
        <div className="chart-placeholder">[Chart Placeholder]</div>
      </div>

      <div className="sector-card">
        <h3>Cell Performance</h3>
        <p>Comparison between cells in this sector for various metrics like households, services, and resources.</p>
        <div className="chart-placeholder">[Chart Placeholder]</div>
      </div>

      <div className="sector-card">
        <h3>Other Metrics</h3>
        <p>Additional reports and key indicators for sector management.</p>
        <div className="chart-placeholder">[Chart Placeholder]</div>
      </div>
    </div>
  );
};

export default SectorReports;
