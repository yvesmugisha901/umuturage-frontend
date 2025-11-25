import React, { useState } from "react";
import "../../styles/districtPages.css";

const ManageSectors = () => {
  const [sectors, setSectors] = useState([
    { id: 1, name: "Kimironko", population: 32000 },
    { id: 2, name: "Remera", population: 28000 },
    { id: 3, name: "Gatsata", population: 15000 }
  ]);
  const [newSector, setNewSector] = useState("");
  const [newPop, setNewPop] = useState("");
  const [search, setSearch] = useState("");

  const addSector = () => {
    if (!newSector || !newPop) return;
    setSectors([...sectors, { id: sectors.length + 1, name: newSector, population: Number(newPop) }]);
    setNewSector(""); setNewPop("");
  };

  const deleteSector = (id) => {
    setSectors(sectors.filter(s => s.id !== id));
  };

  const filtered = sectors.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="district-page-container">
      <h1 className="district-title">Manage Sectors</h1>

      <div className="district-card">
        <input
          type="text"
          className="district-search"
          placeholder="Search sectors..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="district-card">
        <h3>Add Sector</h3>
        <input placeholder="Sector name" value={newSector} onChange={e => setNewSector(e.target.value)} />
        <input type="number" placeholder="Population" value={newPop} onChange={e => setNewPop(e.target.value)} />
        <button className="district-btn" onClick={addSector}>Add</button>
      </div>

      <div className="district-card">
        <table>
          <thead>
            <tr>
              <th>ID</th><th>Name</th><th>Population</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(sec => (
              <tr key={sec.id}>
                <td>{sec.id}</td>
                <td>{sec.name}</td>
                <td>{sec.population.toLocaleString()}</td>
                <td>
                  <button className="district-btn delete" onClick={() => deleteSector(sec.id)}>Delete</button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && <tr><td colSpan="4">No sectors found</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageSectors;
