import { NavLink, Outlet } from "react-router-dom";
import { CiBookmark, CiCalendar, CiEdit, CiHome, CiSquareQuestion  } from "react-icons/ci";
import Navbar from "../Pages/Shared/Employee/Navbar";
import Navbar_A from "../Pages/Shared/Admin/Navbar_A";
 
const Dashboard = () => {
    return (
       <div className="">
        {
            // admin==true?<><Navbar_A></Navbar_A></>:
            <div>
            <Navbar></Navbar>
            <div className="w-64 min-h-screen  bg-orange-400">
                <ul className="menu p-4"> 
                    <li className=" rounded-lg text-white">
                        
                        <NavLink to='/dashboard/custom'><CiEdit size={28}/>My Custom Requests</NavLink></li>
                
                    <li className=" rounded-lg text-white">
                        
                        <NavLink to='/dashboard/pending'><CiSquareQuestion size={28}/>My pending requests</NavLink></li>
                
                    <li className=" rounded-lg text-white">
                        
                        <NavLink to='/dashboard/monthly'><CiCalendar size={28}/>My monthly requests</NavLink></li>

                    <li className=" rounded-lg text-white">
                        
                        <NavLink to='/dashboard/frequently'><CiBookmark size={28}/>Frequently requested items</NavLink></li>



                    
                    <div className="divider"></div>
                    <li className=" rounded-lg text-white">
                        
                        <NavLink to='/'><CiHome size={28}/>Home</NavLink></li>
                    
                    
                    

                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
        }
       </div>
    );
};

export default Dashboard;