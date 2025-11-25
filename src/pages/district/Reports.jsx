import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { FaDownload } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import "../../styles/districtPages.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const DistrictReports = () => {
  // Sample data
  const populationReportData = {
    labels: ["0-14", "15-24", "25-44", "45-64", "65+"],
    datasets: [
      {
        label: "Population by Age",
        data: [1200, 1500, 2000, 1300, 700],
        backgroundColor: "#1c3c62",
      },
    ],
  };

  const sectorPerformanceData = {
    labels: ["Sector A", "Sector B", "Sector C", "Sector D", "Sector E"],
    datasets: [
      {
        label: "Households",
        data: [150, 200, 180, 220, 170],
        backgroundColor: ["#1c3c62", "#3a5f8f", "#5e859d", "#89a1b8", "#b0c1d2"],
      },
    ],
  };

  const otherReportsData = {
    labels: ["Health", "Education", "Water", "Electricity", "Other"],
    datasets: [
      {
        label: "Service Coverage",
        data: [50, 25, 10, 10, 5],
        backgroundColor: ["#1c3c62", "#3a5f8f", "#5e859d", "#89a1b8", "#b0c1d2"],
      },
    ],
  };

  const handleDownloadPDF = () => alert("PDF download triggered");
  const handleDownloadCSV = () => alert("CSV download triggered");

  return (
    <div className="district-page-container">
      <h1 className="district-title">District Reports</h1>

      {/* Download Actions */}
      <div className="district-actions">
        <button className="download-btn" onClick={handleDownloadPDF}>
          <FaDownload /> Download PDF
        </button>
        <button className="download-btn" onClick={handleDownloadCSV}>
          <FaDownload /> Download CSV
        </button>
      </div>

      {/* Report Cards */}
      <div className="district-cards-grid">
        <div className="district-card">
          <h3>Population Report</h3>
          <p>Summary of population data, including demographics and trends.</p>
          <Bar
            data={populationReportData}
            options={{ responsive: true, plugins: { legend: { display: true, position: "bottom" } } }}
          />
        </div>

        <div className="district-card">
          <h3>Sector Performance</h3>
          <p>Comparison between sectors for various metrics like services, households, and resources.</p>
          <Line
            data={sectorPerformanceData}
            options={{ responsive: true, plugins: { legend: { display: true, position: "bottom" } } }}
          />
        </div>

        <div className="district-card">
          <h3>Other Reports</h3>
          <p>Additional metrics and reports relevant to district management.</p>
          <Pie
            data={otherReportsData}
            options={{ responsive: true, plugins: { legend: { position: "bottom" } } }}
          />
        </div>
      </div>
    </div>
  );
};

export default DistrictReports;
