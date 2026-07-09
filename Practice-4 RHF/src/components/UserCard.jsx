const UserCard = ({ user, ind, setUsers, setToggle, setEditUser }) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const edit = () => {
    setEditUser(user);
    setToggle(true);
  };
  const del = (index) => {
    //console.log(index,"delete clicked")
    const updatedUsers = users.filter((user) => user.id !== index);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };
  return (
    <div className="flex flex-col gap-3 items-center border-2 border-slate-300 rounded-2xl p-3">
      <div className="flex items-center justify-center w-40 h-40">
        <img
          className="w-full h-full object-cover rounded-2xl "
          src={user.image}
          alt={user.name}
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-2xl">{user.name.toUpperCase()}</h1>
        <p>
          <i class="ri-mail-line"></i> : {user.email}
        </p>
        <p>
          <i class="ri-phone-line"></i> : {user.mobile}
        </p>
      </div>
      <div className=" w-full flex gap-5 justify-around">
        <button
          className="p-2 w-full bg-amber-500 text-white rounded-lg hover:bg-amber-600 hover:-translate-y-0.5"
          onClick={edit}
        >
          <i className="ri-pencil-line"></i>
        </button>
        <button
          className="p-2 w-full bg-red-500 text-white rounded-lg hover:bg-red-600 hover:-translate-y-0.5"
          onClick={() => del(ind)}
        >
          <i className="ri-delete-bin-4-line"></i>
        </button>
      </div>
    </div>
  );
};
export default UserCard;
