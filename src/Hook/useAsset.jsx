import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAsset = ({assetType, searchTerm, sortBy}) => {
    const axiosPublic = useAxiosPublic();
    
    const {data: asset = [], isPending: loading, refetch} = useQuery({
        queryKey: ['asset', {assetType, searchTerm, sortBy}], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/asset', {params: {assetType, searchTerm, sortBy},
        });

            return res.data;
        }
    })


    return { asset, loading, refetch };
}

export default useAsset