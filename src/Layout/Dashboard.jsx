import { NavLink, Outlet } from "react-router-dom";
import { CiBookmark, CiCalendar, CiEdit, CiHome, CiSquareQuestion  } from "react-icons/ci";
import Navbar from "../Pages/Shared/Employee/Navbar";
// import Navbar_A from "../Pages/Shared/Admin/Navbar_A";
import { FaGlasses, FaRegSquare, FaUser } from "react-icons/fa";
import useAdmin from "../Hook/useAdmin";
import Navbar_A from "../Pages/Shared/Admin/Navbar_A";
 
const Dashboard = () => {
    const [isAdmin] = useAdmin();
    console.log(isAdmin);
    return (
       <div className="">
        {
            isAdmin?<Navbar_A></Navbar_A>:<Navbar></Navbar>
        }
        {
             
            <div className="flex">
           
           {
            isAdmin?
            <>
            <div className="w-64 min-h-screen bg-[#cf2e2e]">
                <ul className="menu p-4">
                <li className=" rounded-lg text-white">
                    <NavLink to='/dashboard/myemployeelist'><FaUser size={28}/>My Employee List</NavLink></li>
                <li className=" rounded-lg text-white">
                    <NavLink to='/dashboard/addemployee'><FaUser size={28}/>Add an Employee</NavLink></li>
                    
                <li className=" rounded-lg text-white">
                    <NavLink to='/dashboard/assetlist'><FaGlasses size={28}/>Asset List</NavLink></li>
                    
                <li className=" rounded-lg text-white">
                    <NavLink to='/dashboard/addasset'><FaUser size={28}/>Add an Asset</NavLink></li>
                    
                <li className=" rounded-lg text-white">
                    <NavLink to='/dashboard/allreq'><FaRegSquare size={28}/>All Requests</NavLink></li>
                    
                <li className=" rounded-lg text-white">
                    <NavLink to='/dashboard/customreqadmin'><CiSquareQuestion size={28}/>Custom Requests List</NavLink></li>
                    
                    
                    
                </ul>
            </div>
            </>:
            <>
          
            
             <div className="w-64 min-h-screen  bg-[#cf2e2e]">
                <ul className="menu p-4"> 
                    <li className=" rounded-lg text-white">
                        
                        <NavLink to='/dashboard/mycustom'><CiEdit size={28}/>My Custom Requests</NavLink></li>
                
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
       
            </>
           }
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
            
        </div>
        }
       </div>
    // <div className="">
    //     {isAdmin ? <h1>Welcome Admin!</h1> : null}
    // </div>
    );
};

export default Dashboard;