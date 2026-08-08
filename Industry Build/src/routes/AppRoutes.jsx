import { createBrowserRouter, RouterProvider } from "react-router";
import AuthProtected from "./protected/AuthProtected";
import AuthLayout from "../app/layout/AuthLayout";
import Login from "../features/auth/ui/pages/Login";
import Register from "../features/auth/ui/pages/Register";
import MainProtected from "./protected/MainProtected";
import MainLayout from "../app/layout/MainLayout";
import Home from "../shared/ui/pages/Home";
import Products from "../features/products/ui/pages/Products";
import { useEffect } from "react";
import { hyderateApi } from "../features/auth/api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../features/auth/state/authSlice";

const AppRoutes = () => {
    const dispatch = useDispatch()
  useEffect(() => {
    (async () => {
      try {
        let response = await hyderateApi();
        //console.log(response)
        dispatch(addUser(response))
      } catch (error) {
        console.log("Error in hyderation App routes : ", error);
      }
    })();
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
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
      ],
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "products",
              element: <Products />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
