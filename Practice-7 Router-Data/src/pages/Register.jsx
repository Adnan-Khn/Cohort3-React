import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { AuthStore } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {registeredUser,setRegisteredUser} = useContext(AuthStore)
  const formSubmit = (data)=>{
    const updatedUser = [...registeredUser,data] 
    setRegisteredUser(updatedUser)
    localStorage.setItem('users',JSON.stringify(updatedUser))
    //console.log(data)
    reset()
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-white text-center">
          Create Account
        </h1>
        <p className="text-zinc-400 text-center mt-2">
          Sign up to start shopping
        </p>

        <form onSubmit={handleSubmit(formSubmit)} className="mt-8 space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Full Name
            </label>
            <input
              {...register("name", { required: "Enter your full name" })}
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-zinc-300 mb-2">Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-zinc-300 mb-2">Password</label>
            <input
              {...register("password", { required: "Password is required" })}
              name="password"
              type="password"
              placeholder="Create a password"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Confirm Password
            </label>
            <input
              {...register("confirmpassword", {
                required: "Confirm your password",
              })}
              name="confirmpassword"
              type="password"
              placeholder="Confirm your password"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition py-3 rounded-lg text-white font-semibold"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-zinc-400">Already have an account?</p>

          <p
            onClick={() => navigate("/")}
            to="/login"
            className="inline-block mt-3 w-full border border-zinc-700 hover:bg-zinc-800 py-3 rounded-lg text-white font-medium transition"
          >
            Login
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
