 
import Navbar from "../Pages/Shared/Employee/Navbar";
import useAdmin from "../Hook/useAdmin";
import Navbar_A from "../Pages/Shared/Admin/Navbar_A";
import { Outlet } from "react-router-dom";
 
const Dashboard = () => {
    const [isAdmin] = useAdmin();
    console.log(isAdmin);
    return (
       <div className="">
        {
            isAdmin?<Navbar_A></Navbar_A>:<Navbar></Navbar>
        }
          <div className="flex-1 max-w-7xl mx-auto">
                <Outlet></Outlet>
           </div>
         
             
            
        </div>
        
       
    );
};

export default Dashboard;