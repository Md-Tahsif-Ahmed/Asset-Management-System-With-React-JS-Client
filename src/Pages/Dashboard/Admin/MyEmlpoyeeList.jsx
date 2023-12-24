import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { CiTrash } from "react-icons/ci";
import { FaUser, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
const MyEmlpoyeeList = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                console.log('Headers:', {
                    Authorization: `Bearer ${localStorage.getItem('access-token')}`,
                });
                const res = await axiosSecure.get('/user');
                return res.data;
            } catch (error) {
                console.error("Error fetching users:", error);
                throw error;
            }
        },
    });
    const handleDelete=(user)=>{
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
                axiosSecure.delete(`/user/${user._id}`)
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
    const handleAdmin = user=>{
        axiosSecure.patch(`user/admin/${user._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div className="">
        <div className="flex justify-evenly my-8">
            <h2 className="text-4xl">All User</h2>
            <h2 className="text-4xl">TotalUser:{users.length}</h2>
            
        </div>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>
                                 {user.name}
                            </td>
                            <td>{user.email}</td>
                            <td>
                            {
                                user.role === 'admin'? 'Admin' :
                                <button
                                    onClick={() => handleAdmin(user)}
                                    className="btn btn-ghost btn-lg text-red-600"
                                >
                                    <FaUsers className="bg-orange-600 p-2" size={28}/> 
                                </button>
                            }
                            </td>
                            <th>
                                <button
                                    onClick={() => handleDelete(user)}
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

export default MyEmlpoyeeList;