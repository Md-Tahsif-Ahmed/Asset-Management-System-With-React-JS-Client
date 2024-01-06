import { FcApprove, FcDisapprove } from "react-icons/fc";
import SectionTittle from "../../../../Component/SectionTittle";
import useRequest from "../../../../Hook/useRequest";
import useAxiosPublic from "../../../../Hook/useAxiosPublic";
import Swal from "sweetalert2";
import { useState } from "react";

const AllRequest = () => {
    const [searchTerm, setSearchTerm] = useState('');
    console.log(searchTerm)
    const {request, refetch} = useRequest({searchTerm });
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

        const handleReject = async (id)=>{
            const res = await axiosPublic.patch(`/myreq/reject/${id}`)
            console.log(res.data)
            if (res.data.success) {
                // Refresh the custom data or update the status locally
                Swal.fire({
                    title: "Rejected",
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
        <div className='flex flex-col lg:flex-row ml-4 lg:ml-0 space-y-4 lg:space-y-0 lg:justify-around lg:items-center mb-4 lg:mb-10'>
            {/* Add your filter inputs (status, assetType) and search input here */}
          
            <input type="text" placeholder="Search By Email" onChange={(e) => setSearchTerm(e.target.value)} className="input input-bordered input-error w-full max-w-xs" />

             
 
        </div>
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
                    className="btn" onClick={()=>handleReject(ass._id)}>
                     <FcDisapprove size={35}></FcDisapprove>
                  </button>

            </th>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  {/* Pagination for the All request */}
  
    </div>
    );
};

export default AllRequest;