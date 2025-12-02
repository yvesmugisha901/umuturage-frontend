import React from "react";
import "../../styles/cellPages.css"; // Use the same common CSS

const ManageVillages = () => {
    const villages = [
        { id: 1, name: "Village Gasharu", leader: "Uwimana Alice", households: 48 },
        { id: 2, name: "Village Kinyana", leader: "Nkurunziza Paul", households: 36 },
        { id: 3, name: "Village Rurembo", leader: "Mukandayisenga Sarah", households: 27 },
    ];

    const handleView = (id) => alert(`Viewing details for Village id: ${id}`);

    return (
        <div className="cell-page-container">
            <header className="cell-page-header">
                <h1>Manage Villages</h1>
                <p>View and manage all villages under your cell.</p>
            </header>

            <section className="management-section">
                <h2 className="section-title">Village List</h2>

                <div className="table-wrapper">
                    <table className="management-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Village Name</th>
                                <th>Leader</th>
                                <th>Households</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {villages.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.leader}</td>
                                    <td>{item.households}</td>
                                    <td>
                                        <button
                                            className="btn-view"
                                            onClick={() => handleView(item.id)}
                                        >
                                            View
                                        </button>
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

export default ManageVillages;
