"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.target;
    const username = form.username.value.trim();
    const password = form.password.value.trim();

    if (!username || !password) {
      setError("Both fields are required.");
      setLoading(false);
      return;
    }

    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result.error) {
      setError("Invalid credentials");
    } else {
      window.location.href = "/products";
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      <h2 className="text-xl font-semibold text-gray-700 text-center">
        Login to Your Account
      </h2>

      {error && (
        <p className="text-red-600 text-center text-sm font-medium">{error}</p>
      )}

      <form onSubmit={handleLogin} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="username" className="text-gray-600 font-medium mb-1">
            Username
          </label>
          <input
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-black"
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-gray-600 font-medium mb-1">
            Password
          </label>
          <input
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-black"
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-600 text-white rounded-lg py-2 hover:bg-orange-500 transition disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
