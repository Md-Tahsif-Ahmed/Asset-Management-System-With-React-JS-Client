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
                    element: <MyEmlpoyeeList></MyEmlpoyeeList>
                },
                {
                  path: 'addasset',
                  element: <AddAsset></AddAsset>,
                },
                {
                  path:'assetlist',
                  element: <AssetList></AssetList>,
                },
                {
                  path: 'addemployee',
                  element: <AddEmployee></AddEmployee>
                },
                {
                  path: 'upasset/:id',
                  element: <UpdateAss></UpdateAss>,
                  loader: ()=> fetch('http://localhost:3000/asset/'),
                  
                },
                {
                  path: 'customreqadmin',
                  element:<CustomReqList></CustomReqList>
                },
                {
                  path: 'allreq',
                  element: <AllRequest></AllRequest>
                },
                {
                  path: 'payment',
                  element: <PaymentPage></PaymentPage>,
              },
                // User or Employee's Path
                {
                  path: 'team',
                  element: <MyTeam></MyTeam>,
                },
                {
                  path: 'myassets',
                  element: <MyAsset></MyAsset>,
                  // loader: ()=> fetch('http://localhost:3000/myreq')
                },
                {
                  path: 'reqassets',
                  element: <ReqAsset></ReqAsset>,
                },
                {
                  path: 'customreq',
                  element: <CustomReqPage></CustomReqPage>
                },
                {
                  path: 'mycustom',
                  element: <MyCustomReq></MyCustomReq>
                },
                {
                  path: 'upcustom/:id',
                  element: <UpdateCustomReq></UpdateCustomReq>,
                  loader: ()=> fetch('http://localhost:3000/custom'),
                },
                {
                  path: 'profile',
                  element:<Profile></Profile>,
                }
            ]
        }, 
        
      ]
    },
  ]);
  

export default router;