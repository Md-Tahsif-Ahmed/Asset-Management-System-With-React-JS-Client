import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useRequest = () => {
    const axiosPublic = useAxiosPublic();
    
    const {data: request = [], isPending: loading, refetch} = useQuery({
        queryKey: ['request'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/myreq');
            return res.data;
        }
    })
    return { request, loading, refetch };
}

export default useRequest;