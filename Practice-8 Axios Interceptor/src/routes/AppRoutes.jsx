import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Protected from "../layouts/Protected";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserLayout from "../layouts/UserLayout";
import Products from "../pages/Products";
import Users from "../pages/Users";

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
          children:[
            {
              path:"",
              element:<Home/>
            },
            {
              path:"products",
              element:<Products/>
            },
            {
              path:"users",
              element:<Users/>
            }
          ]
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
