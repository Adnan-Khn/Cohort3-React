import { useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

const Register = ({ props }) => {
  const { users, setUsers, setIsRegistered } = props;

  const [formData, setFormData ] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    if (
      formData.name &&
      formData.email &&
      formData.password &&
      formData.image
    ) {
      const updatedUser = {...users, formData};
      setUsers(updatedUser);
      localStorage.setItem("users", JSON.stringify(updatedUser));
      setIsRegistered(true);
    } else {
      alert("Please fill all the fields");
    }
  };
  return (
    <div className="flex flex-col gap-2 items-center bg-slate-200 p-10 rounded-3xl w-1/2">
      <div className="flex flex-col gap-2 w-full">
        <h1 className="text-3xl">Register Form</h1>
        <div className="flex flex-col gap-2 items-center w-full">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Name"
            value={formData.name}
            name="name"
            className="w-full mx-3 outline-none border-none p-2 rounded-md bg-slate-200 "
          />
          <input
            onChange={handleChange}
            type="email"
            placeholder="Email"
            value={formData.email}
            name="email"
            className="w-full mx-3 outline-none border-none p-2 rounded-md"
          />
          <input
            onChange={handleChange}
            type="password"
            placeholder="Password"
            value={formData.password}
            name="password"
            className="w-full mx-3 outline-none border-none p-2 rounded-md"
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Image"
            value={formData.image}
            name="image"
            className="w-full mx-3 outline-none border-none p-2 rounded-md"
          />
          <button onClick={handleSubmit} className="w-fit bg-slate-900 px-5 py-3 rounded-md text-white mt-4">Register</button>
        </div>
      </div>
      <p className="text-sm text-center text-gray-500 mt-3">
        Already Registered ? {" "}
        <span onClick={() => setIsRegistered(true)} className="text-blue-400 cursor-pointer hover:italic hover:text-blue-600">Click Here</span>{" "}
      </p>
    </div>
  );
};
export default Register;
