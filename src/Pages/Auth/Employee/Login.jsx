import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from "react-router-dom";

import Swal from 'sweetalert2'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../../../Providers/AuthProvider';
import SocialLogin from '../Admin/SocialLogin';
 


const Login = () => {
    const {signInUser} = useContext(AuthContext)
    const [disable, setDisable] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.form?.pathname || "/dashboard/emhome";
    console.log('state in the location', location.state);
    useEffect(()=>{
        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        // Auth authenticate
        signInUser(email, password)
        .then(result => {
          console.log(result.user);
          Swal.fire({
            title: "LOGIN SUCCESSFULLY",
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
          navigate(from, {replace:true});
          
        })
        .catch(error => {
          console.error(error);
        //   toast.error('Login error');
        });
     };
    
    const handleValidedCapcha=e=>{
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)==true) {
            
            setDisable(false);
        }
   
        else {
            setDisable(true);
        }
        console.log(user_captcha_value);
    }
    return (
        <div>
            <div className="flex justify-center mt-20">
                <div className="hero-content flex-col lg:flex-row">
                    
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Captcha</span>
                                </label>
                                <LoadCanvasTemplate />
                                <input type="text"  onBlur={ handleValidedCapcha }   name="captcha" placeholder="type the above" className="input input-bordered" />
                            </div>
                             

                            <div className="form-control mt-6">
                                <button disabled={disable} className="btn bg-[#7E2553] text-white hover:bg-[#7E2553]">Login</button>
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Login;
