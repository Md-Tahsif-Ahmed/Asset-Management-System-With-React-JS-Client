import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useUser = () => {
    const axiosPublic = useAxiosPublic();
     
    
    const {data: user = [], isPending: loading, refetch} = useQuery({
        queryKey: ['user'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/user/');
            return res.data;
        }
    })
    return { user, loading, refetch };
};

export default useUser;