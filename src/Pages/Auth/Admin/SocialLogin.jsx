import { FaGoogle} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
const SocialLogin = () => {
    // const axiosPublic = useAxiosPublic();
    const {signInWithGoogle} = useAuth();
    const navigate = useNavigate();
    const handleGoogle = ()=>{
        signInWithGoogle()
        .then(res=>{console.log(res.user);
            // const userInfo = {
            //     email: res.user?.email,
            //     name: res.user?.displayName
            // }
            // axiosPublic.post('/user', userInfo)
            // .then(res=>{
            //     console.log(res.data)
            //     navigate('/');
            // })
            navigate('/dashboard');
        })
    }
    return (
        <div className="text-center mb-4">
            <div className="divider"></div>
            <button onClick={handleGoogle} className="btn bg-[#7E2553] text-white hover:bg-[#7E2553]"> 
                <FaGoogle></FaGoogle>Google
            </button>
        </div>
    );
};

export default SocialLogin;