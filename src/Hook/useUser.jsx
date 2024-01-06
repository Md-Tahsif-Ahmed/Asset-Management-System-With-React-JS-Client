import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUser = () => {
    const axiosPublic = useAxiosPublic();
     
    
    const {data: employee = [], isPending: loading, refetch} = useQuery({
        queryKey: ['employee'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/user/');
            return res.data;
        }
    })
    return { employee, loading, refetch };
};

export default useUser;