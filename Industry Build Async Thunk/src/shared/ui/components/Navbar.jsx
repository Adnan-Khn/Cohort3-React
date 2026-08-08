import { BoxIcon, LogOutIcon, ShoppingCart } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="fixed z-10 flex w-full items-center justify-between border-b border-taupe-700/50 bg-taupe-900/60 px-8 py-5 text-white backdrop-blur-xl">
      <div className="text-stone-300">
        <h1 className="text-2xl font-bold">Logo</h1>
      </div>

      <div className="flex gap-8">
        <NavLink
          end
          to="/main"
          className={({ isActive }) =>
            `transition-colors hover:text-stone-300 ${
              isActive ? "text-stone-300" : "text-white"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/main/products"
          className={({ isActive }) =>
            `transition-colors hover:text-stone-300 ${
              isActive ? "text-stone-300" : "text-white"
            }`
          }
        >
          Shop
        </NavLink>

        <NavLink
          to="/main/about"
          className={({ isActive }) =>
            `transition-colors hover:text-stone-300 ${
              isActive ? "text-stone-300" : "text-white"
            }`
          }
        >
          About
        </NavLink>
      </div>

      <div className="flex gap-5">
        <NavLink
          to="/main/cart"
          className="transition-colors hover:text-stone-300"
        >
          <ShoppingCart size={18} />
        </NavLink>

        <NavLink
          to="/main/orders"
          className="transition-colors hover:text-stone-300"
        >
          <BoxIcon size={18} />
        </NavLink>

        <button className="cursor-pointer transition-colors hover:text-rose-500">
          <LogOutIcon size={18} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
