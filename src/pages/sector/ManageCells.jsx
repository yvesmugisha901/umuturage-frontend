import React from "react";
import "../../styles/sectorPages.css";
import { FaPlus } from "react-icons/fa";

const ManageCells = () => {
  return (
    <div className="sector-page-container">
      <h1 className="sector-title">Manage Cells</h1>

      {/* Action Button */}
      <div className="sector-actions">
        <button className="download-btn">
          <FaPlus /> Add New Cell
        </button>
      </div>

      {/* Overview Cards for Cells */}
      <div className="sector-card">
        <h3>Cell List Overview</h3>
        <p>Here you can view all cells under this sector, along with key details and statistics.</p>
        <div className="chart-placeholder">[Cells Overview Placeholder]</div>
      </div>

      <div className="sector-card">
        <h3>Cell Performance Metrics</h3>
        <p>Compare different cells based on services provided, population coverage, and other KPIs.</p>
        <div className="chart-placeholder">[Performance Chart Placeholder]</div>
      </div>

      <div className="sector-card">
        <h3>Other Metrics</h3>
        <p>Additional details like number of households, projects, or reports for each cell can be displayed here.</p>
      </div>
    </div>
  );
};

export default ManageCells;
