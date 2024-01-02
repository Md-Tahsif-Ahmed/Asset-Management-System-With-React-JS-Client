import { FcApprove, FcDisapprove } from "react-icons/fc";
import SectionTittle from "../../../../Component/SectionTittle";
import useCustom from "../../../../Hook/useCustom";
import useAxiosPublic from "../../../../Hook/useAxiosPublic";
import Swal from "sweetalert2";
 

const CustomReqList = () => {
    const {custom} = useCustom();
    const axiosPublic = useAxiosPublic();
    const handleApprove = async (id)=>{
        const res = await axiosPublic.patch(`/custom/approve/${id}`)
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
          } else {
            // Handle error
            console.error('Failed to update status');
          }

    }
    // Handle Reject 
    const handleReject = async (id)=>{
        const res = await axiosPublic.patch(`/custom/reject/${id}`)
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
          } else {
            // Handle error
            console.error('Failed to update status');
          }

    }
    return (
        <div>
            <SectionTittle heading="Custom Request List"></SectionTittle>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Asset name</th>
              <th>Asset Image</th>
              <th>Asset Type</th>
              <th>Price</th>
              <th>Why you need this</th>
              <th>Additional information</th>
              <th>Action</th>
               
            </tr>
          </thead>
          <tbody>
            {custom.map((ass, index) => (
              <tr key={ass._id}>
                <th>{index + 1}</th>
                <td>{ass.asset}</td>
                <td>
                <img src={ass.image} alt="Asset Image" style={{ width: '50px', height: 'auto', borderRadius:'50px' }} />
                </td>
                <td>{ass.type}</td>
                <td>{ass.price}</td>
                <td>{ass.why}</td>
                <td>{ass.adinfo}</td>
                {/* <td>{ass.status}</td> */}
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
        </div>
    );
};

export default CustomReqList;