import useUserRequest from '../../../../Hook/useUserRequest';
import SectionTittle from '../../../../Component/SectionTittle';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../../Hook/useAxiosPublic';

 
 
 
 
const MyAsset = () => {
  const { request, refetch } = useUserRequest();
  const axiosPublic = useAxiosPublic();
  console.log(request)
  const handleReturn = async (id, asset) => {
    const quanAsset = await axiosPublic.patch(`/asset/quantity/${asset}`);
    console.log(quanAsset.data)
    const upAsset = await axiosPublic.patch(`/myreq/return/${id}`);
                console.log(upAsset.data)
                if (upAsset.data.modifiedCount > 0) {
                  // Show success popup
                  refetch();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: 'Asset is returned.',
                    showConfirmButton: false,
                    timer: 1500
                  });
                }
  };

  const handleDelete=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if (result.isConfirmed) {
            axiosPublic.delete(`/myreq/${id}`)
                .then((res) => {
                    console.log(res);
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                        });
                    }
                })
                .catch((error) => {
                    console.error("Error deleting item:", error);
                    // Handle the error, show an alert, or log it as needed
                });
        }
    });
}
return (
    <div>
      <SectionTittle heading="My Asset List" />
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
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
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{ass.asset}</td>
                <td>{ass.type}</td>
                <td>{ass.requestDate}</td>
                <td>{ass.Approval_date}</td>
                <td>{ass.status}</td>
                <td>
                {ass.status === 'approved' && (
                <button className="btn">
                  Print
                </button>
                )}

                {
                  (ass.status === 'approved' && ass.type === 'returnable') &&
                  <button className="btn" onClick={()=>handleReturn(ass._id, ass.asset)}>
                   Return
                </button>
                }
                {ass.status === 'pending' && (
                <button className="btn" onClick={()=>handleDelete(ass._id)}>
                  Cencel
                </button>
                )}

                {
                  ass.status ==='returned' && (
                    <button disabled className='btn'>Return</button>

                  )
                }

                 </td>
  
 

              </tr>
            ))}
          </tbody>
        </table>
      </div>
   
    </div>
  );
};

export default MyAsset;
