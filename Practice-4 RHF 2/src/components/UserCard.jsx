const UserCard = ({ user, deleteUser, setEditUser, setToggle }) => {
  return (
    <div className="w-[75] bg-white rounded-2xl shadow-lg p-5 flex flex-col gap-5 hover:shadow-xl transition-shadow duration-300">
      {/* Avatar */}
      <div className="flex justify-center">
        <img
          src={user.imgUrl}
          alt={user.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-slate-200"
        />
      </div>

      {/* User Details */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-800">{user.name.toUpperCase()}</h2>
      </div>

      {/* Additional Info */}
      <div className="space-y-2 text-sm text-slate-600">
        <div className="flex justify-between gap-1">
          <span>Email :</span>
          <span>{user.email}</span>
        </div>

        <div className="flex justify-between gap-1">
          <span>Role :</span>
          <span>{user.role}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button className="flex-1 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
        onClick={()=>{
          setEditUser(user)
          setToggle(true)
        }}
        >
          Edit
        </button>

        <button
          className="flex-1 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-colors"
          onClick={()=>deleteUser(user.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default UserCard;
