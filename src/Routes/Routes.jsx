import {
    createBrowserRouter

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Homepage/Home/Home";
import Register from "../Pages/Auth/Employee/Register";
import Login from "../Pages/Auth/Employee/Login";
import RegAdmin from "../Pages/Auth/Admin/RegAdmin";
import Dashboard from "../Layout/Dashboard";
import PaymentPage from "../Component/Payment/PaymentPage";
import MyEmlpoyeeList from "../Pages/Dashboard/Admin/MyEmlpoyeeList";
import AddAsset from "../Pages/Dashboard/Admin/AddAsset";
import AssetList from "../Pages/Dashboard/Admin/AssetList/AssetList";
import UpdateAss from "../Pages/Dashboard/Admin/AssetList/UpdateAss";
import MyAsset from "../Pages/Dashboard/Employee/MyAsset/MyAsset";
import CustomReqPage from "../Pages/Dashboard/Employee/Custom/CustomReqPage";
import ReqAsset from "../Pages/Dashboard/Employee/Request/ReqAsset";
import MyTeam from "../Pages/Dashboard/Employee/MyTeam/MyTeam";
import MyCustomReq from "../Pages/Dashboard/Employee/Custom/MyCustomReq";
import UpdateCustomReq from "../Pages/Dashboard/Employee/Custom/UpdateCustomReq";
import CustomReqList from "../Pages/Dashboard/Admin/Custom/CustomReqList";
import AllRequest from "../Pages/Dashboard/Admin/Request/AllRequest";
import Profile from "../Pages/Dashboard/Employee/Profile";
import AddEmployee from "../Pages/Dashboard/Admin/AddEmployee/AddEmployee";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import EmployeeHome from "../Pages/Employee/Homepage/EmployeeHome";
import AdminHome from "../Pages/Admin/Homepage/AdminHome";

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
        },
        
        {
            path: '/dashboard',
            element:<Dashboard></Dashboard>,
            children:[
                {
                    path:'myemployeelist',
                    element: <AdminRoute><MyEmlpoyeeList></MyEmlpoyeeList></AdminRoute>
                },
                {
                  path: 'addasset',
                  element: <AdminRoute><AddAsset></AddAsset></AdminRoute>,
                },
                {
                  path:'assetlist',
                  element: <AdminRoute><AssetList></AssetList></AdminRoute>,
                },
                {
                  path: 'addemployee',
                  element: <AdminRoute><AddEmployee></AddEmployee></AdminRoute>
                },
                {
                  path: 'upasset/:id',
                  element: <AdminRoute><UpdateAss></UpdateAss></AdminRoute>,
                  loader: ()=> fetch('https://asset-management-system-server-psi.vercel.app/asset/'),
                  
                },
                {
                  path: 'customreqadmin',
                  element:<AdminRoute><CustomReqList></CustomReqList></AdminRoute>
                },
                {
                  path: 'allreq',
                  element: <AdminRoute><AllRequest></AllRequest></AdminRoute>
                },
                {
                  path: 'payment',
                  element: <AdminRoute><PaymentPage></PaymentPage></AdminRoute>,
              },
              {
                path: 'adhome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>

              },
                // User or Employee's Path
                {
                  path: 'team',
                  element: <PrivateRoute><MyTeam></MyTeam></PrivateRoute>,
                },
                {
                  path: 'myassets',
                  element: <PrivateRoute><MyAsset></MyAsset></PrivateRoute>,
                  // loader: ()=> fetch('https://asset-management-system-server-psi.vercel.app/myreq')
                },
                {
                  path: 'reqassets',
                  element: <PrivateRoute><ReqAsset></ReqAsset></PrivateRoute>,
                },
                {
                  path: 'customreq',
                  element: <PrivateRoute><CustomReqPage></CustomReqPage></PrivateRoute>
                },
                {
                  path: 'mycustom',
                  element: <PrivateRoute><MyCustomReq></MyCustomReq></PrivateRoute>
                },
                {
                  path: 'upcustom/:id',
                  element: <UpdateCustomReq></UpdateCustomReq>,
                  loader: ()=> fetch('https://asset-management-system-server-psi.vercel.app/custom'),
                },
                {
                  path: 'profile',
                  element:<PrivateRoute><Profile></Profile></PrivateRoute>,
                },
                {
                  path: 'emhome',
                  element:<PrivateRoute><EmployeeHome></EmployeeHome></PrivateRoute>
                },
                // {
                //   path:'updateprofile',
                //   element: <UpdateProfile></UpdateProfile>
                // }
            ]
        }, 
        
      ]
    },
  ]);
  

export default router;