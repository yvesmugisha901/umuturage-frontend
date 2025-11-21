import React from "react";
import "../../styles/DashboardContent.css";

const ManageIsibos = () => {
  return (
    <div className="page-with-sidebar">
      <div className="dashboard-main">
        <main>
          <div className="dashboard-header">
            <h1>Manage Isibos</h1>
            <p>View and manage all isibos under your cell.</p>
          </div>

          <div className="section">
            <h2>Isibo List</h2>

            <table className="data-table">
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
                <tr>
                  <td>1</td>
                  <td>Isibo A1</td>
                  <td>Jean Bosco</td>
                  <td>34</td>
                  <td><button className="btn-submit">View</button></td>
                </tr>
              </tbody>
            </table>
          </div>

        </main>
      </div>
    </div>
  );
};

export default ManageIsibos;
