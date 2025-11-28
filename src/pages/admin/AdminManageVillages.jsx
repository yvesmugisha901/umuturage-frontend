import { useState } from "react";
import { FaSearch, FaEdit, FaTrash, FaPlus } from "react-icons/fa";

export default function AdminManageVillages() {
  const [search, setSearch] = useState("");

  // Junk data (replace with backend)
  const villages = [
    { id: 1, name: "Village A", households: 122, leader: "John Doe" },
    { id: 2, name: "Village B", households: 87, leader: "Alice Uwase" },
    { id: 3, name: "Village C", households: 64, leader: "Kevin Mugisha" },
    { id: 4, name: "Village D", households: 150, leader: "Grace Niyonsaba" },
  ];

  const filtered = villages.filter((v) =>
    v.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Manage Villages</h1>

        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-xl shadow hover:bg-blue-700">
          <FaPlus /> Add Village
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow mb-6">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search villages..."
          className="flex-1 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left min-w-[700px]">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm">
              <th className="p-4">#</th>
              <th className="p-4">Village Name</th>
              <th className="p-4">Households</th>
              <th className="p-4">Village Leader</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length > 0 ? (
              filtered.map((v) => (
                <tr key={v.id} className="border-t hover:bg-gray-50">
                  <td className="p-4">{v.id}</td>
                  <td className="p-4">{v.name}</td>
                  <td className="p-4">{v.households}</td>
                  <td className="p-4">{v.leader}</td>

                  <td className="p-4 text-right">
                    <button className="text-blue-600 hover:text-blue-800 mr-4">
                      <FaEdit />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-6 text-center text-gray-500">
                  No villages found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
