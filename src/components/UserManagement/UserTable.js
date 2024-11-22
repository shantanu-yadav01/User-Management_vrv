import React, { useState, useEffect } from "react";
import UserForm from "./UserForm";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // Load users and roles from localStorage
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const savedRoles = JSON.parse(localStorage.getItem("roles")) || [];
    setUsers(savedUsers);
    setRoles(savedRoles);
  }, []);

  // Save users to localStorage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Handle Add/Edit User
  const handleSaveUser = (user) => {
    if (editingUser) {
      setUsers((prev) =>
        prev.map((u) => (u.id === editingUser.id ? { ...user, id: u.id } : u))
      );
      setEditingUser(null);
    } else {
      setUsers((prev) => [...prev, { ...user, id: Date.now() }]);
    }
    setShowForm(false);
  };

  // Handle Delete User
  const handleDelete = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-zinc-900 border shadow-lg rounded-lg p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">User Management</h2>
          <button
            className="bg-white border text-black font-semibold px-5 py-2 rounded-md shadow-lg hover:bg-gray-200 transition duration-300"
            onClick={() => setShowForm(true)}
          >
            {editingUser ? "Edit User" : "Add User"}
          </button>
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-zinc-900 shadow-md rounded-md border">
            <thead className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Role</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  className={`${
                    index % 2 === 0 ? "bg-zinc-700" : "bg-zinc-800"
                  } text-white`}
                >
                  <td className="px-4 py-3 border">{user.name}</td>
                  <td className="px-4 py-3 border">{user.email}</td>
                  <td className="px-4 py-3 border">{user.role}</td>
                  <td className="px-4 py-3 border">
                    {user.active ? "Active" : "Inactive"}
                  </td>
                  <td className="px-4 py-3 border flex gap-2">
                    <button
                      className="bg-white text-black px-3 py-1 rounded hover:bg-gray-300 transition"
                      onClick={() => {
                        setEditingUser(user);
                        setShowForm(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* User Form */}
        {showForm && (
          <UserForm
            onClose={() => {
              setEditingUser(null);
              setShowForm(false);
            }}
            onSave={handleSaveUser}
            roles={roles}
            user={editingUser}
          />
        )}
      </div>
    </div>
  );
}

export default UserTable;
