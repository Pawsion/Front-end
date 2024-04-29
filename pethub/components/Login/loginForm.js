import React, { useState } from "react";
import { login } from "@/actions/auth-actions";

export default function LoginForm({ onClose }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
  
      try {
        const formData = new FormData(e.target);
        const response = await login(formData);
        console.log(response);
        onClose();
      } catch (error) {
        setError("Invalid username or password");
      }
    };
  
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-20">
        <div className="bg-white p-8 rounded-lg">
          <h2 className="text-center text-xl font-bold mb-4">Login Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block mb-1">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="flex justify-center">
              <button type="submit" className="bg-mainColorBlue text-mainColorWhite py-2 px-6 rounded-full font-Bogart hover:bg-indigo-500 duration-300">
                Login
              </button>
              <button type="button" onClick={onClose} className="ml-4 bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}