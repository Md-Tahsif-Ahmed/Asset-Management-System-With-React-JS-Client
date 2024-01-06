import { Helmet } from "react-helmet-async";
import LimitStock from "./LimitStock";
import PenReq from "./PenReq";
import TopMostReq from "./TopMostReq";

const AdminHome = () => {
    return (
        <div>
             <Helmet>
                <title>Admin | Home</title>
            </Helmet>
            <PenReq></PenReq>
            <TopMostReq></TopMostReq>
            <LimitStock></LimitStock>
            
        </div>
    );
};

export default AdminHome;