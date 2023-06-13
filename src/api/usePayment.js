import { useQuery } from "@tanstack/react-query";

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