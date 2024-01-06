import LimitStock from "./LimitStock";
import PenReq from "./PenReq";
import TopMostReq from "./TopMostReq";

const AdminHome = () => {
    return (
        <div>
            <PenReq></PenReq>
            <TopMostReq></TopMostReq>
            <LimitStock></LimitStock>
            
        </div>
    );
};

export default AdminHome;