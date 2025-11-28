// src/pages/admin/ManageDistrict.jsx
import React, { useState } from "react";
import "../../styles/adminPages.css";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const ManageDistrict = () => {
  // Dummy data for Districts
  const [districts, setDistricts] = useState([
    { id: 1, name: "Gasabo", sectors: 10 },
    { id: 2, name: "Kicukiro", sectors: 8 },
    { id: 3, name: "Nyarugenge", sectors: 9 },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this District?")) {
      setDistricts(districts.filter(d => d.id !== id));
    }
  };

  return (
    <div className="admin-page-container">
      <h1 className="admin-title">Manage Districts</h1>
      <p className="admin-subtitle">Add, view, and edit all Districts in the system</p>

      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>District Name</th>
              <th>Number of Sectors</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {districts.map((district) => (
              <tr key={district.id}>
                <td>{district.id}</td>
                <td>{district.name}</td>
                <td>{district.sectors}</td>
                <td>
                  <button className="admin-btn admin-btn-sm"><FaEye /> View</button>{" "}
                  <button className="admin-btn admin-btn-sm"><FaEdit /> Edit</button>{" "}
                  <button className="admin-btn admin-btn-sm admin-btn-danger" onClick={() => handleDelete(district.id)}><FaTrash /> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDistrict;
