import { useState } from "react";
import Nav from "./components/Nav";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  const [editUser, setEditUser] = useState(null);
  return (
    <div className="p-3 h-screen w-screen bg-slate-200 flex flex-col gap-3">
      <Nav setToggle={setToggle} />
      <div className="flex-1">
        {toggle ? (
          <Form
            users={users}
            setUsers={setUsers}
            setToggle={setToggle}
            editUser={editUser}
            setEditUser={setEditUser}
          />
        ) : (
          <div className="flex flex-wrap gap-5">
            {users.map((user, ind) => {
              return (
                <UserCard
                  user={user}
                  ind={user.id}
                  setUsers={setUsers}
                  setToggle={setToggle}
                  setEditUser={setEditUser}
                  key={ind}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default App;
