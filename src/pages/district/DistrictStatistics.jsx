import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
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

const DistrictStatistics = () => {
  // Sample data
  const populationData = {
    labels: ["0-14", "15-24", "25-44", "45-64", "65+"],
    datasets: [
      {
        label: "Population by Age",
        data: [1200, 1500, 2000, 1300, 700],
        backgroundColor: "#1c3c62",
      },
    ],
  };

  const sectorComparisonData = {
    labels: ["Sector A", "Sector B", "Sector C", "Sector D", "Sector E"],
    datasets: [
      {
        label: "Households",
        data: [150, 200, 180, 220, 170],
        backgroundColor: ["#1c3c62", "#3a5f8f", "#5e859d", "#89a1b8", "#b0c1d2"],
      },
    ],
  };

  const servicesPieData = {
    labels: ["Health", "Education", "Water", "Electricity", "Other"],
    datasets: [
      {
        label: "Service Coverage",
        data: [50, 25, 10, 10, 5],
        backgroundColor: ["#1c3c62", "#3a5f8f", "#5e859d", "#89a1b8", "#b0c1d2"],
      },
    ],
  };

  return (
    <div className="district-page-container">
      <h1 className="district-title">District Statistics</h1>

      {/* Overview Cards */}
      <div className="district-cards-grid">
        <div className="district-card">
          <h3>Total Population</h3>
          <p>Displays population distribution across age groups.</p>
          <Bar data={populationData} options={{ responsive: true, plugins: { legend: { display: true, position: "bottom" } } }} />
        </div>

        <div className="district-card">
          <h3>Sector Comparison</h3>
          <p>Compare number of households per sector.</p>
          <Line data={sectorComparisonData} options={{ responsive: true, plugins: { legend: { display: true, position: "bottom" } } }} />
        </div>

        <div className="district-card">
          <h3>Service Coverage</h3>
          <p>Distribution of basic services across the district.</p>
          <Pie data={servicesPieData} options={{ responsive: true, plugins: { legend: { position: "bottom" } } }} />
        </div>
      </div>

      {/* Download buttons */}
      <div className="district-actions">
        <button className="download-btn" onClick={() => alert("Downloading PDF...")}>Download PDF</button>
        <button className="download-btn" onClick={() => alert("Downloading CSV...")}>Download CSV</button>
      </div>
    </div>
  );
};

export default DistrictStatistics;
