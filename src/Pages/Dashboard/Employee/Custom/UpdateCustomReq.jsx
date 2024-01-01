import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import SectionTittle from "../../../../Component/SectionTittle";
import { FaEdit } from "react-icons/fa";
import useAxiosPublic from "../../../../Hook/useAxiosPublic";
import useAxiosSecure from "../../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const UpdateCustomReq = () => {
    const { register, handleSubmit, reset } = useForm();
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { id } = useParams();
    const assets = useLoaderData();
    console.log('All here:',assets);
    const a = assets.find((ass) => ass._id === id);
    const { _id, asset, type, price, why, adinfo, date, image} = a;
    
    const onSubmit = async (data)=>{
        console.log(data);
              // image upload to imgbb and then get an url
              const imageFile = { image: data.image[0] }
              const res = await axiosPublic.post(image_hosting_api, imageFile, {
                  headers: {
                      'content-type': 'multipart/form-data'
                  }
              });
              if (res.data.success) {
                // now send the menu item data to the server with the image url
                console.log(data);
                const assetItem = {
                    asset: data.asset,
                    type: data.asset_type,
                    price: data.price,
                    why: data.why,
                    adinfo: data.adinfo,
                    image: res.data.data.display_url,
                    date: data.date
                }
                const customRes = await axiosSecure.patch(`/custom/${_id}`, assetItem);
                console.log(customRes.data)
                if(customRes.data.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Custom Request Successfully Updated',
                        icon: 'success',
                        confirmButtonText: 'done'
                      })
                    navigate('/dashboard/mycustom');
                }
            }
            console.log( 'with image url', res.data);
    }
    return (
        <div>
            <SectionTittle heading="Update a Custom Request"></SectionTittle>
            <div className="ml-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Asset Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Asset Name"
                            defaultValue={asset}
                            {...register('asset', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Asset Type*</span>
                            </label>
                            <select defaultValue={type} {...register('asset_type', { required: true })}
                                className="select select-bordered w-full">
                                {/* <option disabled value="default">Select a Product</option> */}
                                <option value="returnable">returnable</option>
                                <option value="non-returnable">non-returnable</option>
                               
                                 
                            </select>
                        </div>
                       
                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                defaultValue={price}
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Why you need this*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Why you need this"
                                defaultValue={why}
                                {...register('why', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Additional information*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Additional information"
                                defaultValue={adinfo}
                                {...register('adinfo', { required: true })}
                                className="input input-bordered w-full" />
                        </div>


                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Current Date*</span>
                            </label>
                            <input
                                type="date"
                                placeholder="Current Date"
                                defaultValue={date}
                                {...register('date', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>
                     

                     
                    <div className="form-control w-full my-6">
                            <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                        </div>
                    <button className="btn">
                       Update a Custom Request  <FaEdit className="ml-4"></FaEdit>
                    </button>
                </form>
            </div>
            
        </div>
    );
};

export default UpdateCustomReq;