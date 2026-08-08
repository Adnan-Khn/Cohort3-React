import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import HomeSkeleton from "../../shared/ui/pages/HomeSkeleton";
import Navbar from "../../shared/ui/components/Navbar";

const MainProtected = () => {
  const { user, isLoading } = useSelector((state) => state.auth);
  if (isLoading) return <HomeSkeleton />;
  if (!user) return <Navigate to={"/"} />;
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className=" px-10 text-white pt-25">
        <Outlet />
      </div>
    </div>
  );
};

export default MainProtected;
