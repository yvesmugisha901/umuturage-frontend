import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

export default function AdminReports() {
  const [filter, setFilter] = useState("monthly");

  // Example chart data (replace with backend data later)
  const registrationData = [
    { month: "Jan", users: 40 },
    { month: "Feb", users: 55 },
    { month: "Mar", users: 70 },
    { month: "Apr", users: 50 },
    { month: "May", users: 90 },
  ];

  const activityData = [
    { name: "Village Leaders", count: 24 },
    { name: "Cell Leaders", count: 16 },
    { name: "Sector Officers", count: 8 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Reports & Analytics</h1>

      {/* Filter */}
      <div className="mb-6">
        <select
          className="p-3 bg-white shadow rounded-xl outline-none"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm">Total Users</h3>
          <p className="text-3xl font-bold mt-2">1,245</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm">Active Villages</h3>
          <p className="text-3xl font-bold mt-2">98</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm">Reports Submitted</h3>
          <p className="text-3xl font-bold mt-2">374</p>
        </div>
      </div>

      {/* Line Chart: User Registrations */}
      <div className="bg-white p-6 rounded-xl shadow mb-10">
        <h2 className="text-lg font-semibold mb-4">User Registrations</h2>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={registrationData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#4F46E5" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart: Activity Summary */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Activity Summary</h2>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={activityData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
