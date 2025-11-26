import { useState } from "react";
import { Search, Edit, Trash2 } from "lucide-react";

export default function ManageUsers() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  // Temporary demo data – replace later with API
  const users = [
    { id: 1, name: "John Doe", email: "john@gmail.com", role: "Village Leader", status: "active" },
    { id: 2, name: "Sarah Uwase", email: "sarah@yahoo.com", role: "Sector Officer", status: "inactive" },
    { id: 3, name: "Eric Mugisha", email: "eric123@gmail.com", role: "Cell Leader", status: "active" },
  ];

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const matchesRole = roleFilter === "all" || user.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Manage Users</h1>

      {/* Filters */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {/* Search input */}
        <div className="flex items-center gap-2 bg-white shadow p-3 rounded-xl">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search by name or email..."
            className="outline-none flex-1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Role Filter */}
        <select
          className="p-3 bg-white shadow rounded-xl outline-none"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="all">All Roles</option>
          <option value="Village Leader">Village Leader</option>
          <option value="Cell Leader">Cell Leader</option>
          <option value="Sector Officer">Sector Officer</option>
        </select>

        {/* Add New User Button */}
        <button className="bg-blue-600 text-white rounded-xl px-4 py-3 shadow hover:bg-blue-700">
          + Add New User
        </button>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${
                      user.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="p-3 flex gap-3">
                  <button className="text-blue-600 hover:text-blue-800">
                    <Edit className="w-5 h-5" />
                  </button>

                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredUsers.length === 0 && (
          <p className="p-6 text-center text-gray-500">No users found.</p>
        )}
      </div>
    </div>
  );
}
