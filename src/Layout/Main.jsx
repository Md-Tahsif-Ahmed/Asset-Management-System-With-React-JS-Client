import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
const Main = () => {
    const location = useLocation();
    console.log(location);
    const noNavFoot = location.pathname.includes('/dashboard')
    return (
        <div>
           {noNavFoot ||  <Navbar></Navbar>}
            <Outlet></Outlet>
            {noNavFoot || <Footer></Footer>}

        </div>
    );
};

export default Main;