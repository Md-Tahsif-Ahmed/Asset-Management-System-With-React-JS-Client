import SectionTittle from "../../../../Component/SectionTittle";
import useUserRequest from "../../../../Hook/useUserRequest";
 

const MyAsset = () => {
   const {request} = useUserRequest();

  return (
    <div>
    <SectionTittle heading="My Asset List"></SectionTittle>
    <div className="overflow-x-auto">
    <table className="table table-zebra w-full">
      {/* head */}
      <thead>
        <tr>
          <th>#</th>
          <th>Asset name</th>
          <th>Asset Type</th>
          <th>Request Date</th>
          <th>Approval Date</th>
          <th>Request Status</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        {request.map((ass, index) => (
          <tr key={ass._id}>
            <th>{index + 1}</th>
            <td>{ass.asset}</td>
            <td>{ass.type}</td>
            <td>{ass.requestDate}</td>
            <td>{ass.Approval_date}</td>
            <td>{ass.status}</td>
            <th className="flex space-x-1">
              <button
                className="btn">
              </button>
              <button
                className="btn">
                 
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

export default MyAsset;