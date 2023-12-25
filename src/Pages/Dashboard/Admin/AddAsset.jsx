
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTittle from "../../../Component/SectionTittle";
const AddAsset = () => {
    const { register, handleSubmit, reset } = useForm();
    // const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    // const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
    // const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data)=>{
        console.log(data);
        const assetItem = {
            product: data.product,
            type: data.pro_type,
            quantity: data.quantity,
            date: data.date,
        }
        const addAsset = await axiosSecure.post('/asset', assetItem);
                console.log(addAsset.data)
                if(addAsset.data.insertedId){
                    // show success popup
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${data.product} is added.`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
    }
    return (
        <div>
            <SectionTittle heading="Add Asset Form"></SectionTittle>
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
                        Add Asset <FaUtensils className="ml-4"></FaUtensils>
                    </button>
                </form>
            </div>
            
        </div>
    );
};

export default AddAsset;