
import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useUserCustom = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();
    
    const {data: custom = [], isPending: loading, refetch} = useQuery({
        queryKey: ['custom'], 
        queryFn: async() =>{
            const res = await axiosPublic.get(`/custom/${user.email}`);
            return res.data;
        }
    })
    return { custom, loading, refetch };
};

export default useUserCustom;