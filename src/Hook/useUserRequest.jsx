import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useUserRequest = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
    
    const {data: request = [], isPending: loading, refetch} = useQuery({
        queryKey: ['request'], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/myreq/${user.email}`);
            return res.data;
        }
    })
    return { request, loading, refetch };
};

export default useUserRequest;