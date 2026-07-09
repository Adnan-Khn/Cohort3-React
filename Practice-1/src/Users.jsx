const Users = ({ user, del }) => {
  //console.log(user);
  return (
    <div className="max-w-sm rounded-xl bg-white shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300">
      <div className="bg-slate-600 p-6 flex flex-col items-center">
        <img
          src={user[0].avatar}
          alt={user[0].name}
          className="w-24 h-24 rounded-full border-4 border-white object-cover"
        />
        <h2 className="mt-4 text-2xl font-bold text-white">{user[0].name}</h2>

        <p className="text-indigo-100">{user[0].role}</p>
      </div>
      <div className="px-5 space-y-3 text-gray-700">
        <div className="flex justify-between">
          <span className="font-semibold">Email: </span>
          <span>{user[0].email}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Department: </span>
          <span>{user[0].department}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Age: </span>
          <span>{user[0].age}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Phone: </span>
          <span>{user[0].phone}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Location: </span>
          <span>
            {user[0].city}, {user[0].country}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Salary: </span>
          <span>₹{user[0].salary.toLocaleString()}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-semibold">Status</span>

          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              user[0].status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {user[0].status}
          </span>
        </div>

        {/* Delete Button */}
        <button
          className="mt-6 w-full rounded-xl bg-red-600 py-2 text-white font-semibold hover:bg-red-900 transition"
          onClick={() => del(user[0].id)}
        >
          Delete User
        </button>
      </div>
    </div>
  );
};
export default Users;
