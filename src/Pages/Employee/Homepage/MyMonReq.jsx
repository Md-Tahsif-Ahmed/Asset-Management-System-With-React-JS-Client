import { useState } from "react";
import SectionTittle from "../../../Component/SectionTittle";
import useUserRequest from "../../../Hook/useUserRequest";

const MyMonReq = () => {
    const [status, setStatus] = useState('');
    const [assetType, setAssetType] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const {request, refetch} = useUserRequest({ status, assetType, searchTerm});
    console.log('Fetched Data:', request);

    // Get the current month and year
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  // Filter requests for the current month
  const monthlyRequests = request.filter((request) => {
    const reqDate = new Date(request.requestDate);
    return (
      reqDate.getMonth() + 1 === currentMonth &&
      reqDate.getFullYear() === currentYear
    );
  });

  // Sort requests by date in descending order
  const sortedMonthlyRequests = monthlyRequests.sort((a, b) => {
    const dateA = new Date(a.requestDate);
    const dateB = new Date(b.requestDate);
    return dateB - dateA;
  });
    return (
        <div className="my-20">
      <SectionTittle heading="My Monthly Requests" />
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
        <thead>
            <tr>
              <th>#</th>
              <th>Asset name</th>
              <th>Asset Type</th>
              <th>Request Date</th>
              <th>Approval Date</th>
         
          
            </tr>
          </thead>
          <tbody>
          {sortedMonthlyRequests.map((ass, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{ass.asset}</td>
                <td>{ass.type}</td>
                <td>{ass.requestDate}</td>
                <td>{ass.Approval_date}</td>
           
                 
  
 

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyMonReq;

 

 
 