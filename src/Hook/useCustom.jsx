import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useCustom = () => {
    const axiosPublic = useAxiosPublic();
    
    const {data: custom = [], isPending: loading, refetch} = useQuery({
        queryKey: ['custom'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/custom');
            return res.data;
        }
    })
    return { custom, loading, refetch };
};

export default useCustom;