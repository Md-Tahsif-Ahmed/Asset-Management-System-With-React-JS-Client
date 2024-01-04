import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useUserRequest = ({ status, assetType, searchTerm}) => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
    
    const {data: request = [], isPending: loading, refetch} = useQuery({
        queryKey: ['request', {status, assetType, searchTerm}], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/myreq/${user.email}`,{
                params: {status, assetType, searchTerm},
            });
            return res.data;
        }
    })
    return { request, loading, refetch };
};

export default useUserRequest;