"use client";
import React, { useState } from "react";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    const userData = {
      name,
      email,
      password,
    };
    try {
      const response = await fetch("/api/newuser", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setEmail("");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-indigo-600 text-white rounded-md py-2 px-4 hover:bg-indigo-700 focus:outline-none"
          onClick={handleClick}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
