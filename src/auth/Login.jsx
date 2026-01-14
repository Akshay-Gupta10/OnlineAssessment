import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    console.log("Login Data:", form);
    alert("Login Successful ✅");
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-950 flex items-center justify-center">
      {/* Card */}
      <div className="w-[360px] bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-7">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-white">Welcome Back</h2>
        <p className="text-center text-blue-200 text-sm mt-1">Login to your account</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="input"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="input"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-blue-200 text-sm mt-4">
          Don't have an account?{" "}
            <Link
                to="/register"
                className="text-white hover:underline cursor-pointer"
            >Register
            </Link>
        </p>
      </div>
    </div>
  );
}
