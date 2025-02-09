"use client";

import { useState } from "react";

export function ProfileForm() {
  const [formData, setFormData] = useState({
    email: "example@gmail.com",
    password: "••••••••••••••••",
    specialization: "Design",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label className="text-lg text-gray">Email</label>
        <input
          type="email"
          value={formData.email}
          className="w-full p-3 bg-slate-100 rounded-lg"
          readOnly
        />
      </div>

      <div className="space-y-2">
        <label className="text-lg text-gray">Password</label>
        <input
          type="password"
          value={formData.password}
          className="w-full p-3 bg-slate-100 rounded-lg"
          readOnly
        />
      </div>

      <div className="space-y-2">
        <label className="text-lg text-gray">Specialization</label>
        <input
          type="text"
          value={formData.specialization}
          className="w-full p-3 bg-slate-100 rounded-lg"
          readOnly
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Save
      </button>
    </form>
  );
}
