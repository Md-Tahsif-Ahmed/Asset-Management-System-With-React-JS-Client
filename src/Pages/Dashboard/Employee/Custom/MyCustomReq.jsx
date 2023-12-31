import { CiRead, CiSignpostDuo1 } from "react-icons/ci";
import SectionTittle from "../../../../Component/SectionTittle";
import useCustom from "../../../../Hook/useCustom";

const MyCustomReq = () => {
    const {custom, refetch } = useCustom();
    return (
        <div>
        <SectionTittle heading="My Custom Request"></SectionTittle>
        <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
            {/* head */}
            <thead>
                <tr>
                    <th>#</th>
                    <th>Asset name</th>
                    <th>Asset Type</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>View Details</th>
                     
                </tr>
            </thead>
            <tbody>
                {custom.map((ass, index) => (
                    <tr key={ass._id}>
                        <th>{index + 1}</th>
                        <td>
                             {ass.asset}
                        </td>
                        <td>{ass.type}</td>
                        <td>
                            {ass.price}
                        </td>
                        <td>{ass.status}</td>
                         
                        <th>
                            <button
                               
                               
                                className="btn btn-ghost btn-lg text-red-600"
                            >
                                <CiRead size={28}></CiRead>
                            </button>
                        </th>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
        
    </div>
    );
};

export default MyCustomReq;