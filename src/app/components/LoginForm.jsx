"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;

    // Call NextAuth credentials provider
    const result = await signIn("credentials", {
      redirect: false, // 🚀 prevent default redirect
      username,
      password,
    });

    if (result.error) {
      setError("Invalid credentials");
    } else {
      // optional: redirect manually after login success
      window.location.href = "/dashboard";
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <label htmlFor="username" className="block">
        Username
      </label>
      <input
        className="block p-1 text-black border rounded"
        type="text"
        name="username"
        id="username"
        placeholder="Enter username"
      />
      <label htmlFor="password" className="block">
        Password
      </label>
      <input
        className="block p-1 text-black border rounded"
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />

      {error && <p className="text-red-500">{error}</p>}

      <button type="submit" className="outline rounded-md p-2">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
