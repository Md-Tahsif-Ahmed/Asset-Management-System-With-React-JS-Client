import { useLoaderData, useParams } from "react-router-dom";
import SectionTittle from "../../../../Component/SectionTittle";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const UpdateAss = () => {
    const { id } = useParams();
    console.log(id);
    const asset = useLoaderData();
    console.log('here:',asset);
    const ass = asset.find((p) => p._id === id);
    console.log(ass);

    const { _id, product, type, date, quantity} = ass;
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data)=>{
        console.log(data);
        const assetItem = {
            product: data.product,
            type: data.pro_type,
            quantity: data.quantity,
            date: data.date,
        }
        const upAsset = await axiosSecure.patch(`/asset/${_id}`, assetItem);
                console.log(upAsset.data)
                if(upAsset.data.modifiedCount > 0){
                    // show success popup
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.product} is updated.`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
    }
    return (
        <div>
            <SectionTittle heading="Update Asset Form"></SectionTittle>
            <div className="ml-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Product Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Name"
                            {...register('product', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Product Type*</span>
                            </label>
                            <select defaultValue="default" {...register('pro_type', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a Product</option>
                                <option value="returnable">returnable</option>
                                <option value="non-returnable">non-returnable</option>
                               
                                 
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Quantity*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Quantity"
                                {...register('quantity', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Current Date*</span>
                            </label>
                            <input
                                type="date"
                                placeholder="Current Date"
                                defaultValue={new Date().toISOString().split('T')[0]}
                                {...register('date', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                     

                     

                    <button className="btn">
                        Updated Asset <FaEdit className="ml-4"></FaEdit>
                    </button>
                </form>
            </div>
            
        </div>
    );
};

export default UpdateAss;




 