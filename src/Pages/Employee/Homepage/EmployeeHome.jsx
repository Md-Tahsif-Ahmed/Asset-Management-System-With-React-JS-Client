import { Helmet } from "react-helmet-async";
import MyCusEmpReq from "./MyCusEmpReq";
import MyMonReq from "./MyMonReq";
import MyPenReq from "./MyPenReq";

const EmployeeHome = () => {
    return (
        <div>
            <Helmet>
                <title>Employee | Home</title>
            </Helmet>
            <MyCusEmpReq></MyCusEmpReq>
            <MyPenReq></MyPenReq>
            <MyMonReq></MyMonReq>
        </div>
    );
};

export default EmployeeHome;