// src/pages/admin/ManageCell.jsx
import React, { useState } from "react";
import "../../styles/adminPages.css";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const ManageCell = () => {
  // Dummy data for Cells
  const [cells, setCells] = useState([
    { id: 1, name: "Cell A", sector: "Sector 1", isibos: 5 },
    { id: 2, name: "Cell B", sector: "Sector 2", isibos: 8 },
    { id: 3, name: "Cell C", sector: "Sector 1", isibos: 6 },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this Cell?")) {
      setCells(cells.filter(c => c.id !== id));
    }
  };

  return (
    <div className="admin-page-container">
      <h1 className="admin-title">Manage Cells</h1>
      <p className="admin-subtitle">Add, view, and edit all Cells in the system</p>

      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Cell Name</th>
              <th>Sector</th>
              <th>Number of Isibos</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cells.map((cell) => (
              <tr key={cell.id}>
                <td>{cell.id}</td>
                <td>{cell.name}</td>
                <td>{cell.sector}</td>
                <td>{cell.isibos}</td>
                <td>
                  <button className="admin-btn admin-btn-sm"><FaEye /> View</button>{" "}
                  <button className="admin-btn admin-btn-sm"><FaEdit /> Edit</button>{" "}
                  <button className="admin-btn admin-btn-sm admin-btn-danger" onClick={() => handleDelete(cell.id)}><FaTrash /> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCell;
