import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthStore } from "../context/AuthContext";

const UserLayout = () => {
  const { loggedUser } = useContext(AuthStore);
  if (!loggedUser) return <Navigate to={"/"} />;
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default UserLayout;
