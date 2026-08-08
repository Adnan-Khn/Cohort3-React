import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Protected from "../layouts/Protected";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserLayout from "../layouts/UserLayout";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Protected />,
      children: [
        {
          path: "",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/main",
      element: <UserLayout />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          // children:[
          //   {
          //     path:"",
          //     element:<Home/>
          //   },
          //   {
          //     path:"services",
          //     element:<Services/>
          //   },
          //   {
          //     path:"about",
          //     element:<About/>
          //   }
          // ]
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
