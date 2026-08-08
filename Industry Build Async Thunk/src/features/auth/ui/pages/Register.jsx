import React from "react";
import { useAuth } from "../../hooks/useAuthHook";

const Register = () => {
  const { navigate, registerUser, register, handleSubmit, errors } = useAuth();
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-black rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-200">
            Create Account 🚀
          </h1>
          <p className="text-gray-500 mt-2">Sign up to get started</p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit(registerUser)}>
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              {...register("name", {
                required: "name is required",
              })}
              type="text"
              placeholder="Enter your name"
              className="w-full text-gray-200 rounded-lg border border-gray-700 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />
            {errors.name && <p className="text-red">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              {...register("email", {
                required: "email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                }
              })}
              type="email"
              placeholder="Enter your email"
              className="w-full text-gray-200 rounded-lg border border-gray-700 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />
            {errors.email && <p className="text-red">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Minimum 8 characters are required",
                },
              })}
              type="password"
              placeholder="Create a password"
              className="w-full text-gray-200 rounded-lg border border-gray-700 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />
            {errors.password && (
              <p className="text-red">{errors.password.message}</p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 cursor-pointer"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
