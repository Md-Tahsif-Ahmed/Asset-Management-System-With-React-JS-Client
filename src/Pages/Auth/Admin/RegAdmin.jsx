import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const RegAdmin = () => {
    const { createUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data);

        try {
            const res = await createUser(data.name, data.email, data.password, data.dob, data.comname, data.pack, data.logo);
            const loggedUser = res.user;
            console.log(loggedUser);
 
        } catch (error) {
            console.error(error);
            // Handle error, show toast, etc.
        }
    };

   return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="name" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" required />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Company Name</span>
                                </label>
                                <input type="name" {...register("comname", { required: true })} name='comname' placeholder="company name" className="input input-bordered" required />
                                {errors.comname && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">logo Url</span>
                                </label>
                                <input type="text" {...register("logo", { required: true })} name='logo' placeholder="logo url" className="input input-bordered" required />
                                {errors.logo && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]/
 })} name='password' placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === 'required' && <span>This field is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less than 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one uppercase, lowercase, special character, and number</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date of Birth</span>
                                </label>
                                <input type="date" {...register("dob", { required: true })} name='dob' placeholder="Date of Birth" className="input input-bordered" required />
                                {errors.dob && <span className="text-red-600">This field is required</span>}
                            </div>
                            {/* select package options */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Package</span>
                                </label>
                                <select {...register("pack", { required: true })} name='pack' className="select select-bordered">
                                    <option value="">Select a package</option>
                                    <option value="5 Members for $5">5 Members for $5</option>
                                    <option value="10 Members for $8">10 Members for $8</option>
                                    <option value="20 Members for $15">20 Members for $15</option>
                                 
                                </select>
                                {errors.package && <span className="text-red-600">This field is required</span>}
                            </div>


                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                        <p className="text-center mt-4">Already have an Account?<Link to='/login'>Login</Link></p>
                        {/* <SocialLogin></SocialLogin> */}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default RegAdmin;
