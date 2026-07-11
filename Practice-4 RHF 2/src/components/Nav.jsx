const Nav = ({ setToggle }) => {
  return (
    <div className="w-full flex justify-between items-center py-3 px-6 border-b-2 border-b-teal-200">
      <h1 className="text-2xl font-bold">Logo</h1>

      <button
        onClick={() => setToggle(true)}
        className="text-white font-medium bg-olive-600 p-3 rounded-xl"
      >
        Add User
      </button>
    </div>
  );
};

export default Nav;