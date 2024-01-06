import { Link, useNavigate } from "react-router-dom";
import sp_logo from "../../../assets/s_logo.png";
import useAuth from "../../../Hook/useAuth";
const Navbar_A = () => {
  const {user, logOut} = useAuth();
  const navigate = useNavigate();
  const handleLogOut = ()=>{
    logOut()
    .then(()=>{
      navigate('/login')
    })
    .catch(error=>console.error(error));
  }
   
  
  const Navlinks_A = <>
  <Link to='/dashboard/adhome'>Home</Link>
  <Link to='/dashboard/myemployeelist'>My Employee List</Link>
  <Link to='/dashboard/addemployee'>Add an Employee</Link>
  <Link to='/dashboard/assetlist'>Asset List</Link>
  <Link to='/dashboard/addasset'>Add an Asset</Link>
  <Link to='/dashboard/allreq'>All Requests</Link>
  <Link to='/dashboard/customreqadmin'>Custom Requests List</Link>
  {
          user ? <>
          <Link onClick={handleLogOut}>LogOut</Link>
          </>:
          <>
          <Link to='/login'>Login</Link>
          </>
        }

</>
    return (
        <div className="navbar  bg-[#cf2e2e]  text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm text-white font-extrabold space-y-2 dropdown-content mt-3 z-[1] p-2 shadow bg-gray-700 rounded-box w-52">
                  {Navlinks_A}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl text-white"><span className="w-10 h-10"><img src={sp_logo} alt="" /></span><span className="font-medium">Asset</span></a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white space-x-3 font-extrabold">
                {Navlinks_A}
            </ul>
          </div>
          <div className="navbar-end">
          
         
          </div>
      </div>
    );
};

export default Navbar_A;