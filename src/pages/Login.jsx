import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
      <div className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin} className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800"yy>
          <div className="mb-4">
            <label className="block text-gray-100 p-4">Email</label>
            <input
              type="email"
              className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-100 p-4">Password</label>
            <input
              type="password"
              className="w-full bg-gray-900/50 text-white rounded-2xl shadow-2xl p-8 border border-gray-800"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Login
          </button>
        </form>
        <p className="mt-4 text-gray-100 text-center">
          Don't have an account? <a href="/register" className="text-blue-400">Register</a>
        </p>
      </div>
  );
};

export default Login;
