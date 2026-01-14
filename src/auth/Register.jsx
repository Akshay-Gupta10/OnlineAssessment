import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "" 
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert("Registered Successfully ✅");
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950 flex items-center justify-center">
      
      {/* Card */}
      <div className="w-[460px] bg-white/10 backdrop-blur-xl 
      rounded-2xl shadow-2xl border border-white/20 p-7">
        
        <h2 className="text-3xl font-bold text-center text-white">
          Create Account
        </h2>

        <p className="text-center text-blue-200 text-sm mt-1">
          Join us today
        </p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="input"
            onChange={handleChange}
            required
          />

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            required
            className={`input appearance-none cursor-pointer ${
              form.role === "" ? "text-gray-300" : "text-white"
            }`}
          >
            <option value="" disabled className="text-gray-500">
              Role
            </option>
            <option value="user" className="text-black">
              User
            </option>
            <option value="admin" className="text-black">
              Admin
            </option>
          </select>


          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="input"
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg 
            bg-gradient-to-r from-blue-500 to-indigo-600 
            text-white font-semibold hover:opacity-90 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-blue-200 text-sm mt-4">
          Already have an account?{" "}
          <Link
                to="/login"
                className="text-white hover:underline cursor-pointer"
            >Login 
          </Link>

        </p>
      </div>
    </div>
  );
}

