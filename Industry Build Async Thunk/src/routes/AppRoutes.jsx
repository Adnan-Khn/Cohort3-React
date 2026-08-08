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
import { hyderateUserAction } from "../features/auth/state/authAction";
import About from "../shared/ui/pages/About";
import Orders from "../features/orders/ui/pages/Orders";
import Cart from "../features/cart/ui/pages/Cart";

const AppRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (() => {
      try {
        //let response = await hyderateApi();
        //console.log(response)
        //dispatch(addUser(response))
        dispatch(hyderateUserAction());
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
            {
              path:"about",
              element:<About/>
            },
            {
              path:"orders",
              element:<Orders/>
            },
            {
              path:"cart",
              element:<Cart/>
            }
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
