import { useQuery } from "@tanstack/react-query";
import useAuth from "../component/useAuth";

export const useAllPayment = () => {
    const { data: payments = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/payments`)
            return res.json();
        }
    })
    return [payments, refetch]
}


export const userEmailToPayment = () => {
    const { user } = useAuth();
    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const data = await fetch(`${import.meta.env.VITE_API_URL}/payment/user?email=${user?.email}`)
            return data.json();
        }
    })
    return [payments, refetch]
}