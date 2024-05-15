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
    <div className="fixed left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
      <div className="w-full rounded-lg bg-white p-8 md:w-96">
        <h2 className="mb-4 text-center text-xl font-bold">Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="mb-1 block">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2"
              required
            />
          </div>
          <div className="relative mb-6">
            <label htmlFor="password" className="mb-1 block">
              Password:
            </label>
            <div className="flex items-center">
              <input
                type={showPassword ? "text" : "password"} // Show/hide password based on state
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 flex h-full cursor-pointer items-center justify-center text-gray-500"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-6 w-6" />
                ) : (
                  <EyeIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          {error && <p className="mb-4 text-red-500">{error}</p>}
          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded-full bg-mainColorBlue px-6 py-2 font-Bogart text-mainColorWhite duration-300 hover:bg-indigo-500"
            >
              Login
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-4 rounded-full bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
