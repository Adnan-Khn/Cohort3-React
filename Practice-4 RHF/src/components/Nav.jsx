const Nav = ({setToggle}) => {
  return (
    <div className="bg-white flex justify-between rounded-2xl px-10 py-1 items-center">
      <div className="rounded-full">
        <img
          className="w-15"
          src="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png"
          alt="user"
        />
      </div>
      <div className="flex gap-5 justify-around font-semibold">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <div>
        <button className="p-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-800 hover:-translate-y-0.5" onClick={()=>{setToggle((prev)=>!prev)}}>Add User</button>
      </div>
    </div>
  );
};
export default Nav;
