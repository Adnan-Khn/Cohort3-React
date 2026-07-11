import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";

const Form = ({ users, setToggle, setUsers, editUser, setEditUser }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: editUser,
  });

  const formSubmit = (data) => {
    let updatedUsers;
    //console.log(data)
    if (editUser) {
      updatedUsers = users.map((user) => {
        return user.id === editUser.id ? { ...user, ...data } : user;
      });
    } else {
      updatedUsers = [...users, { id: nanoid(), ...data }];
    }
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setEditUser(null);
    reset();
    setToggle(false);
  };
  return (
    <div className="bg-white rounded-2xl p-6 shadow-2xl w-125 z-10">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">
          {editUser ? "Edit User" : "Add User"}
        </h1>

        <button
          onClick={() => {
            setToggle(false);
            setEditUser(null);
          }}
          className="text-xl font-bold"
        >
          X
        </button>
      </div>

      <form onSubmit={handleSubmit(formSubmit)}>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-3 bg-slate-100 rounded-xl"
          name="name"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
            pattern: {
              value: /^[a-zA-Z\s]+$/,
              message: "Name must contain only letters and spaces",
            },
          })}
        />
        {errors?.name && <p className="text-red-500">{errors.name.message}</p>}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 bg-slate-100 rounded-xl"
          name="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors?.email && (
          <p className="text-red-500">{errors.email.message}</p>
        )}
        <input
          type="Text"
          placeholder="Designation"
          className="w-full p-3 mb-3 bg-slate-100 rounded-xl"
          name="role"
          {...register("role", {
            required: "Role is required",
            pattern: {
              value: /^[a-zA-Z\s]+$/,
              message: "Role must contain only letters and spaces",
            },
          })}
        />
        {errors?.role && <p className="text-red-500">{errors.role.message}</p>}
        <input
          type="url"
          placeholder="Image URL"
          className="w-full p-3 mb-3 bg-slate-100 rounded-xl"
          name="imgUrl"
          {...register("imgUrl", {
            required: "Image URL is required",
            pattern: {
              value:
                /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
              message: "Invalid image URL",
            },
          })}
        />
        {errors?.imgUrl && (
          <p className="text-red-500">{errors.imgUrl.message}</p>
        )}
        <button
          type="submit"
          className="w-full bg-olive-600 text-white font-bold p-3 rounded-xl"
        >
          {editUser ? "Update " : "Add "} User
        </button>
      </form>
    </div>
  );
};

export default Form;
