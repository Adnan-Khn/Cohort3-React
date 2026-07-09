import { useEffect } from "react";
import { useForm } from "react-hook-form";

const Form = ({ setUsers, setToggle, editUser, setEditUser }) => {
  //console.log(users)
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  useEffect(() => {
    if (editUser) {
      reset(editUser);
    }
  }, [editUser, reset]);
  let formSubmit = (data) => {
    //console.log(data)
    setUsers((prev) => {
      let updatedUsers;
      if (editUser) {
        updatedUsers = prev.map((user) =>
          user.id === editUser.id ? { ...user, ...data } : user,
        );
      } else {
        updatedUsers = [...prev, { id: Date.now(), ...data }];
      }
      //console.log(updatedUsers)
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return updatedUsers;
    });
    setEditUser(null);
    setToggle((prev) => !prev);
    reset();
  };
  // const users = localStorage.getItem("users")
  // console.log(users)
  return (
    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
      <div className="flex flex-col min-w-100 bg-slate-200 gap-3 p-5 rounded-2xl items-center relative">
        <h1 className="text-2xl font-semibold">
          {editUser ? "Edit User" : "Create User"}
        </h1>
        <button className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center"
        onClick={()=>{setToggle((prev)=>!prev); setEditUser(null)}}
        >
          <i className="ri-close-circle-line text-red-600 cursor-pointer hover:scale-130"></i>
        </button>
        <form
          className="flex flex-col gap-3 w-full"
          onSubmit={handleSubmit(formSubmit)}
        >
          <input
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^\S.*$/,
                message: "Blank spaces is not allowed",
              },
            })}
            type="text"
            placeholder="Name"
            className="w-full bg-white text-slate-800 p-2 rounded-2xl"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="Email"
            className="w-full bg-white text-slate-800 p-2 rounded-2xl"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
          <input
            {...register("mobile", {
              required: "Mobile Number is required",
              minLength: {
                value: 10,
                message: "Mobile Number must be 10 digits",
              },
              maxLength: {
                value: 10,
                message: "Mobile Number must be 10 digits",
              },
            })}
            type="text"
            placeholder="Mobile Number"
            className="w-full bg-white text-slate-800 p-2 rounded-2xl"
          />
          {errors.mobile && (
            <p className="text-red-600">{errors.mobile.message}</p>
          )}
          <input
            {...register("image", {
              required: "Image is required",
            })}
            type="url"
            placeholder="Image"
            className="w-full bg-white text-slate-800 p-2 rounded-2xl"
          />
          {errors.image && (
            <p className="text-red-600">{errors.image.message}</p>
          )}
          <button
            type="submit"
            className="p-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-800 hover:-translate-y-0.5"
          >
            {editUser ? "Update User" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Form;
