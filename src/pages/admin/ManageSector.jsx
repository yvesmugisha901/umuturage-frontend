// src/pages/admin/ManageSector.jsx
import React, { useState } from "react";
import "../../styles/adminPages.css";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const ManageSector = () => {
  // Dummy data for Sectors
  const [sectors, setSectors] = useState([
    { id: 1, name: "Sector 1", district: "Gasabo", cells: 6 },
    { id: 2, name: "Sector 2", district: "Kicukiro", cells: 5 },
    { id: 3, name: "Sector 3", district: "Nyarugenge", cells: 7 },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this Sector?")) {
      setSectors(sectors.filter(s => s.id !== id));
    }
  };

  return (
    <div className="admin-page-container">
      <h1 className="admin-title">Manage Sectors</h1>
      <p className="admin-subtitle">Add, view, and edit all Sectors in the system</p>

      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Sector Name</th>
              <th>District</th>
              <th>Number of Cells</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sectors.map((sector) => (
              <tr key={sector.id}>
                <td>{sector.id}</td>
                <td>{sector.name}</td>
                <td>{sector.district}</td>
                <td>{sector.cells}</td>
                <td>
                  <button className="admin-btn admin-btn-sm"><FaEye /> View</button>{" "}
                  <button className="admin-btn admin-btn-sm"><FaEdit /> Edit</button>{" "}
                  <button className="admin-btn admin-btn-sm admin-btn-danger" onClick={() => handleDelete(sector.id)}><FaTrash /> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageSector;
