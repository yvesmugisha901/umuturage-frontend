// src/pages/admin/ManageIsibo.jsx
import React, { useState } from "react";
import "../../styles/adminPages.css";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const ManageIsibo = () => {
  // Example dummy data
  const [isibos, setIsibos] = useState([
    { id: 1, name: "Isibo 1", village: "Gisozi", members: 12 },
    { id: 2, name: "Isibo 2", village: "Kacyiru", members: 8 },
    { id: 3, name: "Isibo 3", village: "Kimihurura", members: 15 },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this Isibo?")) {
      setIsibos(isibos.filter(i => i.id !== id));
    }
  };

  return (
    <div className="admin-page-container">
      <h1 className="admin-title">Manage Isibos</h1>
      <p className="admin-subtitle">Add, view, and edit all Isibos in the system</p>

      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Isibo Name</th>
              <th>Village</th>
              <th>Members</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isibos.map((isibo) => (
              <tr key={isibo.id}>
                <td>{isibo.id}</td>
                <td>{isibo.name}</td>
                <td>{isibo.village}</td>
                <td>{isibo.members}</td>
                <td>
                  <button className="admin-btn admin-btn-sm"><FaEye /> View</button>{" "}
                  <button className="admin-btn admin-btn-sm"><FaEdit /> Edit</button>{" "}
                  <button className="admin-btn admin-btn-sm admin-btn-danger" onClick={() => handleDelete(isibo.id)}><FaTrash /> Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageIsibo;
