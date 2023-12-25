import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAsset = () => {
    const axiosPublic = useAxiosPublic();
    
    const {data: asset = [], isPending: loading, refetch} = useQuery({
        queryKey: ['asset'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/asset');
            return res.data;
        }
    })


    return { asset, loading, refetch };
}

export default useAsset