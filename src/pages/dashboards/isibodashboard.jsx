import React, { useState } from "react";
import Sidebar from "../../components/sidebars/Sidebar";
import Footer from "../../components/Footer";
import "../../styles/isiboDashboard.css";

const IsiboDashboard = () => {
  const [households, setHouseholds] = useState([
    { id: 1, head: "Jean Bosco", members: 5, location: "Hse 12", date: "2025-05-01" },
    { id: 2, head: "Aline Nyirah", members: 3, location: "Hse 21", date: "2025-05-07" },
  ]);

  const [totalRequestsSent, setTotalRequestsSent] = useState(5);

  const addHousehold = (e) => {
    e.preventDefault();
    const form = e.target;
    const newHousehold = {
      id: households.length + 1,
      head: form.head.value,
      members: parseInt(form.members.value),
      location: form.location.value,
      date: new Date().toISOString().split("T")[0],
    };
    setHouseholds([...households, newHousehold]);
    setTotalRequestsSent(totalRequestsSent + 1);
    form.reset();
    alert("Household submitted for Cell approval!");
  };

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <Sidebar level="isibo" />

      {/* Main Content */}
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1>Isibo Dashboard</h1>
          <p>Manage households and send updates to your Cell leader.</p>
        </header>

        {/* Stat Cards */}
        <section className="cards-container">
          <div className="card blue">
            <h3>Total Households</h3>
            <p>{households.length}</p>
          </div>
          <div className="card green">
            <h3>New Requests Sent</h3>
            <p>{totalRequestsSent}</p>
          </div>
          <div className="card orange">
            <h3>Pending Approvals</h3>
            <p>–</p>
          </div>
        </section>

        {/* Add Household Form */}
        <section className="section">
          <h2>Add New Household</h2>
          <form className="form" onSubmit={addHousehold}>
            <input type="text" name="head" placeholder="Head of Household Name" required />
            <input type="number" name="members" placeholder="Number of Members" required />
            <input type="text" name="location" placeholder="House Number / Location" required />
            <button className="btn-submit">Submit Household</button>
          </form>
        </section>

        {/* Household Table */}
        <section className="section">
          <h2>Existing Households</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Household Head</th>
                <th>Members</th>
                <th>Location</th>
                <th>Date Added</th>
              </tr>
            </thead>
            <tbody>
              {households.map((h) => (
                <tr key={h.id}>
                  <td>{h.head}</td>
                  <td>{h.members}</td>
                  <td>{h.location}</td>
                  <td>{h.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default IsiboDashboard;
