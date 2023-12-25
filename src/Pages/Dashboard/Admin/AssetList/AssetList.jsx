import { CiEdit, CiTrash } from "react-icons/ci";
import SectionTittle from "../../../../Component/SectionTittle";
import useAsset from "../../../../Hook/useAsset";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const AssetList = () => {
    const { asset, refetch } = useAsset();
    const axiosSecure=useAxiosSecure();

    const handleUpdate=()=>{

    }
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
                                <button
                                    onClick={() => handleUpdate(ass)}
                                    className="btn btn-ghost btn-lg text-red-600"
                                >
                                    <CiEdit size={28}></CiEdit>
                                </button>
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