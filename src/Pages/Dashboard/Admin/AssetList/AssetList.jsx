import { CiEdit, CiTrash } from "react-icons/ci";
import SectionTittle from "../../../../Component/SectionTittle";
import useAsset from "../../../../Hook/useAsset";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useState } from "react";

const AssetList = () => {
  const [assetType, setAssetType] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  console.log(searchTerm)
  const { asset, refetch } = useAsset({assetType, searchTerm, sortBy });
    const axiosSecure=useAxiosSecure();

    const handleDelete=(ass)=>{
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
                axiosSecure.delete(`/asset/${ass._id}`)
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
            <SectionTittle heading="Asset List"></SectionTittle>
            <div className='flex justify-around items-center mb-10'>
            {/* Add your filter inputs (status, assetType) and search input here */}
          
            <input type="text" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)} className="input input-bordered input-error w-full max-w-xs" />

            <select className="select select-error w-full max-w-xs" onChange={(e) => setAssetType(e.target.value)}>
                <option value="">Asset Types</option>
                <option value="returnable">returnable</option>
                <option value="non-returnable">non-returnable</option>
            </select>
            <select  onChange={(e) => setSortBy(e.target.value)}>
                <option value="">Sort By</option>
                <option value="asc">Ascending</option>
                <option value="dsc">Descending</option>
            </select>
 
        </div>
            <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Product Type</th>
                        <th>Quantity</th>
                        <th>Added Date</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {asset.map((ass, index) => (
                        <tr key={ass._id}>
                            <th>{index + 1}</th>
                            <td>
                                 {ass.product}
                            </td>
                            <td>{ass.type}</td>
                            <td>
                                {ass.quantity}
                            </td>
                            <td>{ass.date}</td>
                            <th>
                               <Link to={`/dashboard/upasset/${ass._id}`}>
                               <button
                                     
                                     className="btn btn-ghost btn-lg text-red-600"
                                 >
                                     <CiEdit size={28}></CiEdit>
                                 </button>
                               </Link>
                            </th>
                            <th>
                                <button
                                    onClick={() => handleDelete(ass)}
                                    className="btn btn-ghost btn-lg text-red-600"
                                >
                                    <CiTrash size={28}></CiTrash>
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

export default AssetList;