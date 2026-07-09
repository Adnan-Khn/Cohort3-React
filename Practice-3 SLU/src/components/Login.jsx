import { useState } from "react";

const Login = ({ users, setIsLoggedIn, setIsRegistered}) => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);
  const handleSubmit = () => {
    if(!formData.email || !formData.password){
      alert("Please fill all the fields");
      return;
    }
    const user = users.find((user) => user.email === formData.email);
    if (user && user.password === formData.password) {
      setIsLoggedIn((prev) => !prev);
    }
    else {
      alert("Invalid email or password");
    }
  };
  return (
    <div className="flex flex-col gap-2 items-center bg-slate-200 p-10 rounded-3xl w-1/2">
      <div className="flex flex-col gap-2 w-full">
        <h1 className="text-3xl">Login Form</h1>
        <div className="flex flex-col gap-2 items-center w-full">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            className="w-full mx-3 outline-none border-none p-2 rounded-md bg-slate-200 "
          />
          <input
            onChange={handleChange}
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            className="w-full mx-3 outline-none border-none p-2 rounded-md bg-slate-200 "
          />
          <button
            onClick={handleSubmit}
            className="w-fit bg-slate-900 px-5 py-3 rounded-md text-white mt-4"
          >
            Login
          </button>
        </div>
      </div>
      <p className="text-sm text-center text-gray-500 mt-3">
        Haven't registered yet ?{" "}
        <span onClick={()=>setIsRegistered(false)} className="text-blue-400 cursor-pointer hover:italic hover:text-blue-600">
          Click Here
        </span>
      </p>
    </div>
  );
};
export default Login;
