import React, { useState } from "react";
import { login } from "../../actions/auth-actions";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function LoginForm({ onClose }: any) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    try {
      const formData = new FormData(e.target);
      const response = await login(formData as any);
      console.log(response);
      onClose();
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-20">
      <div className="bg-white p-8 rounded-lg w-full md:w-96">
        <h2 className="text-center text-xl font-bold mb-4">Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="block mb-1">
              Username:
            </label>
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
          <div className="mb-6 relative">
            <label htmlFor="password" className="block mb-1">
              Password:
            </label>
            <div className="flex items-center">
              <input
                type={showPassword ? "text" : "password"} // Show/hide password based on state
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 h-full flex items-center justify-center text-gray-500 cursor-pointer"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-6 w-6" />
                ) : (
                  <EyeIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-mainColorBlue text-mainColorWhite py-2 px-6 rounded-full font-Bogart hover:bg-indigo-500 duration-300"
            >
              Login
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-4 bg-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
