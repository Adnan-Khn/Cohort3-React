import { useState } from "react";
import Nav from "./components/Nav";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users,setUsers] = useState(JSON.parse(localStorage.getItem('users'))||[])
  const [editUser,setEditUser] = useState(null)
  const deleteUser = (id) =>{
    const updatedUsers = users.filter(user=>user.id!==id)
    setUsers(updatedUsers)
    localStorage.setItem("users",JSON.stringify(updatedUsers))
  }
  return (
    <div className="h-screen w-full bg-mauve-200 flex flex-col">
      <Nav setToggle={setToggle} />

      <div className="relative flex-1 overflow-auto">
        
        {/* Blur only cards section */}
        <div
          className={`flex flex-wrap p-5 gap-5 transition-all duration-300 ${
            toggle ? "blur-sm pointer-events-none" : ""
          }`}
        >
          {users.map((user) => (
            <UserCard key={user.id} user={user} deleteUser={deleteUser} setEditUser={setEditUser} setToggle={setToggle} />
          ))}
        </div>

        {/* Form Overlay */}
        {toggle && (
          <div className="absolute inset-0 flex justify-center items-center">
            <Form setToggle={setToggle} setUsers={setUsers} users={users} editUser={editUser} setEditUser={setEditUser}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default App