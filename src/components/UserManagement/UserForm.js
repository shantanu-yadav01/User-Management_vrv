import React, { useState, useEffect } from "react";

function UserForm({ onClose, onSave, roles, user }) {
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [role, setRole] = useState(user?.role || "");
  const [active, setActive] = useState(user?.active || false);

  const handleSubmit = () => {
    if (!name || !email || !role) {
      alert("Please fill in all fields.");
      return;
    }

    // We are validating with the email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    onSave({ name, email, role, active });
    onClose();
  };

  const inputClass="w-full mb-3 p-2 border rounded text-black";

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-black border shadow shadow-white rounded-lg text-white  p-6 w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">{user ? "Edit User" : "Add User"}</h3>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className={inputClass}
        >
          <option value="" disabled>
            Select Role
          </option>
          {roles.map((r) => (
            <option key={r.name} value={r.name}>
              {r.name}
            </option>
          ))}
        </select>
        <label className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={active}
            onChange={(e) => setActive(e.target.checked)}
          />
          Active
        </label>
        <div className="flex justify-end gap-2">
          <button
            className="text-white border bg-red-500 px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-zinc-900 border text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserForm;
