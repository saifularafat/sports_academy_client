import { useQuery } from "@tanstack/react-query";

export const useAllClasses = () => {
    const { data: Classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/classes`)
            return res.json();
        }
    })
    return [Classes, refetch]
}