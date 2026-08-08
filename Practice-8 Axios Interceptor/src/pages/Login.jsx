import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { AuthStore } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { loggedUser, setLoggedUser, registeredUser } = useContext(AuthStore);
  const formSubmit = (data) => {
    const user = registeredUser.find((user) => {
      return user.email === data.email && user.password === data.password;
    });
    if (!user) {
      alert("Invalid Credentials");
      return;
    }
    localStorage.setItem("loggedUser", JSON.stringify(user));
    setLoggedUser(user);
    //console.log(data)
    navigate("/main");
    reset;
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-white text-center">
          Welcome Back
        </h1>
        <p className="text-zinc-400 text-center mt-2">
          Login to continue shopping
        </p>

        <form onSubmit={handleSubmit(formSubmit)} className="mt-8 space-y-5">
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
              placeholder="Enter your password"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition py-3 rounded-lg text-white font-semibold"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <div className="mt-6 text-center">
          <p className="text-zinc-400">New user?</p>

          <p
            onClick={() => navigate("/register")}
            to="/register"
            className="inline-block mt-3 w-full border border-zinc-700 hover:bg-zinc-800 py-3 rounded-lg text-white font-medium transition"
          >
            Create an Account
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
