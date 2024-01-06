// import { useLoaderData, useNavigate, useParams } from "react-router-dom";
// import SectionTittle from "../../../../Component/SectionTittle";
// import useAxiosSecure from "../../../../Hook/useAxiosSecure";
// import { FaEdit } from "react-icons/fa";
// import Swal from "sweetalert2";
// import { useForm } from "react-hook-form";

// const UpdateProfile = () => {
//     // const { name, dob } = useLoaderData(); // Assuming useLoaderData is used to get the initial data
//     const { register, handleSubmit } = useForm();
//     const navigate = useNavigate();
//     const axiosSecure = useAxiosSecure();

//     const onSubmit = async (data) => {
//         console.log(data);
//         const updatedProfile = {
//             name: data.name,
//             dob: data.dob,
//         };

//         try {
//             // Make the API call to update the profile
//             const response = await axiosSecure.put("/api/update-profile", updatedProfile);

//             if (response.data.success) {
//                 // Show success message
//                 Swal.fire({
//                     icon: "success",
//                     title: "Profile Updated Successfully",
//                 });

//                 // Redirect to the profile page or any other page
//                 navigate("/profile");
//             } else {
//                 // Show error message
//                 Swal.fire({
//                     icon: "error",
//                     title: "Failed to Update Profile",
//                     text: response.data.message,
//                 });
//             }
//         } catch (error) {
//             console.error("Error updating profile:", error);
//         }
//     };

//     return (
//         <div>
//             <SectionTittle heading="Update Profile"></SectionTittle>
//             <div className="ml-8">
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <div className="form-control w-full my-6">
//                         <label className="label">
//                             <span className="label-text">Full Name*</span>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder="Full Name"
//                             defaultValue={name}
//                             {...register("name", { required: true })}
//                             required
//                             className="input input-bordered w-full"
//                         />
//                     </div>

//                     <div className="form-control w-full my-6">
//                         <label className="label">
//                             <span className="label-text">Date of Birth*</span>
//                         </label>
//                         <input
//                             type="date"
//                             placeholder="Date of Birth"
//                             defaultValue={dob}
//                             {...register("dob", { required: true })}
//                             className="input input-bordered w-full"
//                         />
//                     </div>

//                     <button type="submit" className="btn">
//                         Update Profile <FaEdit className="ml-4"></FaEdit>
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default UpdateProfile;
