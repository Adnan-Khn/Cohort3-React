import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router";
import { AuthStore } from "../context/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const { setLoggedUser } = useContext(AuthStore);
  console.log(location);
  return (
    <div className="border-r border-zinc-800 flex flex-col justify-between pr-2">
      <div>
        <h1>Logo</h1>
        <div className="flex flex-col gap-5 mt-20">
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-semibold text-[#94bc04dd]" : ""
            }
            to={"/main"}
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-semibold text-[#94bc04dd]" : ""
            }
            to={"/main/users"}
          >
            Users
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-semibold text-[#94bc04dd]" : ""
            }
            to={"/main/products"}
          >
            Products
          </NavLink>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            localStorage.removeItem("loggedUser")
            setLoggedUser(null)
          }}
          className="hover: bg-[#94bc04dd] p-3 rounded-2xl w-full"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
