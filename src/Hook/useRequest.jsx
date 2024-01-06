import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useRequest = ({searchTerm }) => {
    const axiosPublic = useAxiosPublic();
    
    const {data: request = [], isPending: loading, refetch} = useQuery({
        queryKey: ['request', {searchTerm }], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/myreq', {params: {searchTerm },});
            return res.data;
            
        }
    })
    
    return { request, loading, refetch };
}

export default useRequest;