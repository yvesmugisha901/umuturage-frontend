import React from "react";
import "../../styles/cellPages.css"; // Use the same common CSS

const ManageIsibos = () => {
  const isibos = [
    { id: 1, name: "Isibo A1", leader: "Jean Bosco", households: 34 },
    { id: 2, name: "Isibo B2", leader: "Alice Umuhoza", households: 21 },
    { id: 3, name: "Isibo C3", leader: "John Mutoni", households: 17 },
  ];

  const handleView = (id) => alert(`Viewing details for Isibo id: ${id}`);

  return (
    <div className="cell-page-container">
      <header className="cell-page-header">
        <h1>Manage Isibos</h1>
        <p>View and manage all isibos under your cell.</p>
      </header>

      <section className="management-section">
        <h2 className="section-title">Isibo List</h2>
        <div className="table-wrapper">
          <table className="management-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Isibo Name</th>
                <th>Leader</th>
                <th>Households</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {isibos.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.leader}</td>
                  <td>{item.households}</td>
                  <td>
                    <button className="btn-view" onClick={() => handleView(item.id)}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ManageIsibos;
