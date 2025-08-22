"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import registerUser from "../actions/auth/registerUser";

const RegisterForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const form = e.target;
    const username = form.username.value.trim();
    const password = form.password.value.trim();

    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }

    setLoading(true);
    try {
      const result = await registerUser({ username, password });
      console.log(result);
      setSuccess("Registration successful!");
      form.reset();

      // Redirect to /products after 1 second
      setTimeout(() => {
        router.push("/products");
      }, 1000);
    } catch (err) {
      console.error(err);
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 space-y-4">
      <h2 className="text-xl font-semibold text-gray-700 text-center">
        Create an Account
      </h2>

      {error && <p className="text-red-600 text-center">{error}</p>}
      {success && <p className="text-green-600 text-center">{success}</p>}

      <form onSubmit={handleRegister} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="username" className="text-gray-600 font-medium mb-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-black"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-gray-600 font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-black"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-600 text-white rounded-lg py-2 hover:bg-orange-500 transition disabled:opacity-50"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
