import { useQuery } from "@tanstack/react-query";
import useAuth from "../component/useAuth"
import { useAxiosSecure } from "./useAxiosSecure";

export const useAdmin = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isAdmin, isLoading: adminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log('response admin', res);
            return res.data.admin
        }
    })
    return [isAdmin, adminLoading]
}

export const useInstructors = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isInstructors, isLoading: instLoading } = useQuery({
        queryKey: ['isInstructors', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
            console.log('response instructor', res);
            return res.data.instructor
        }
    })
    return [isInstructors, instLoading]
}