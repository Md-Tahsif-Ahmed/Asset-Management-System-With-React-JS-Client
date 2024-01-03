import { FcApprove, FcDisapprove } from "react-icons/fc";
import SectionTittle from "../../../../Component/SectionTittle";
import useRequest from "../../../../Hook/useRequest";
import useAxiosPublic from "../../../../Hook/useAxiosPublic";
import Swal from "sweetalert2";

const AllRequest = () => {
    const {request, refetch} = useRequest();
    const axiosPublic = useAxiosPublic();
    const handleApprove = async (id)=>{
        const res = await axiosPublic.patch(`/myreq/approve/${id}`)
        console.log(res.data)
        if (res.data.success) {
            // Refresh the custom data or update the status locally
            Swal.fire({
                title: "Approved Successfully",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
              refetch();
          } else {
            // Handle error
            console.error('Failed to update status');
          }
        }
    return (
        <div>
        <SectionTittle heading="All Request List"></SectionTittle>
  <div className="overflow-x-auto">
    <table className="table table-zebra w-full">
      {/* head */}
      <thead>
        <tr>
          <th>#</th>
          <th>Asset name</th>
          <th>Asset Type</th>
          <th>Email of requester</th>
          <th>Name of requester</th>
          <th>Request Date</th>
          <th>Additional note</th>
          <th>Status</th>
          <th>Action</th>
           
        </tr>
      </thead>
      <tbody>
        {request.map((ass, index) => (
          <tr key={ass._id}>
            <th>{index + 1}</th>
            <td>{ass.asset}</td>
             
            <td>{ass.type}</td>
            <td>{ass.email}</td>
            <td>{ass.name}</td>
            <td>{ass.requestDate}</td>
            <td>{ass.need}</td>
            <td>{ass.status}</td>
            <th className="flex space-x-1">
              <button
                className="btn" onClick={()=>handleApprove(ass._id)}>
                <FcApprove size={35}></FcApprove>
              </button>
              <button
                className="btn">
                 <FcDisapprove size={35}></FcDisapprove>
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

export default AllRequest;