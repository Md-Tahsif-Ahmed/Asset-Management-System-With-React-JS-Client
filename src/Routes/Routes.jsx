import {
    createBrowserRouter

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Homepage/Home/Home";
import Register from "../Pages/Auth/Employee/Register";
import Login from "../Pages/Auth/Employee/Login";
import RegAdmin from "../Pages/Auth/Admin/RegAdmin";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: '/register',
            element: <Register></Register>,
        },
        {
            path: '/regadmin',
            element: <RegAdmin></RegAdmin>,
        }
      ]
    },
  ]);
  

export default router;