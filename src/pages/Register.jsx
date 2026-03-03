import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Mock user creation
    setUser({ email });
    alert("Registration successful!");
    navigate("/login");
  };

  return ( 
    <div className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800">

      <h2 className="text-3xl font-bold mb-6 text-center">
        Register
      </h2>

      <form onSubmit={handleRegister} className="space-y-4">

        {/* Email */}
        <div>
          <label className="block text-sm mb-1 text-gray-300 p-4">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full px-4 py-2 bg-gray-800/60 
            border border-gray-700 rounded-lg 
            focus:outline-none focus:ring-2 
            focus:ring-green-500 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm mb-1 text-gray-300 p-4">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 bg-gray-800/60 
            border border-gray-700 rounded-lg 
            focus:outline-none focus:ring-2 
            focus:ring-green-500 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm mb-1 text-gray-300 p-4">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full px-4 py-2 bg-gray-800/60 
            border border-gray-700 rounded-lg 
            focus:outline-none focus:ring-2 
            focus:ring-green-500 transition"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 
          py-2 rounded-lg font-medium transition p-4"
        >
          Register
        </button>
      </form>

      <p className="mt-6 text-sm text-center text-gray-400 p-4">
        Already have an account?{" "}
        <a href="/login" className="text-green-400 hover:underline">
          Login
        </a>
      </p>

    </div>
);
};

export default Register;
