import { useState } from "react";
import SectionTittle from "../../../Component/SectionTittle";
import useUserRequest from "../../../Hook/useUserRequest";

const MyPenReq = () => {
    const [status, setStatus] = useState('');
    const [assetType, setAssetType] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const {request, refetch} = useUserRequest({ status, assetType, searchTerm});
    const pendingRequests = request.filter((ass) => ass.status === 'pending');
    return (
        <div className="mt-20">
      <SectionTittle heading="My Pending Requests" />
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
        <thead>
            <tr>
              <th>#</th>
              <th>Asset name</th>
              <th>Asset Type</th>
              <th>Request Date</th>
              <th>Approval Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          { pendingRequests.map((ass, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{ass.asset}</td>
                <td>{ass.type}</td>
                <td>{ass.requestDate}</td>
                <td>{ass.Approval_date}</td>
                <td>{ass.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyPenReq;