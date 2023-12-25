
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTittle from "../../../Component/SectionTittle";
const AddEmployee = () => {
    const { register, handleSubmit, reset } = useForm();
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    return (
        <div>
            <SectionTittle heading="Add Asset Form"></SectionTittle>
            
        </div>
    );
};

export default AddEmployee;