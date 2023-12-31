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
            path: '/payment',
            element: <PaymentPage></PaymentPage>,
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
                  path: 'upasset/:id',
                  element: <UpdateAss></UpdateAss>,
                  loader: ()=> fetch('http://localhost:3000/asset/'),
                  
                },
                // User or Employee's Path
                {
                  path: 'myassets',
                  element: <MyAsset></MyAsset>
                },
                {
                  path: 'reqassets',
                  element: <ReqAsset></ReqAsset>,
                },
                {
                  path: 'customreq',
                  element: <CustomReqPage></CustomReqPage>
                },
            ]
        }, 
        
      ]
    },
  ]);
  

export default router;