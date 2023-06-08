import { useQuery } from '@tanstack/react-query'

export const useAllCoach = () => {
    const { data: coach = [], refetch } = useQuery({
        queryKey: ['coach'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/coach`)
            return res.json();
        }
    })
    return [coach, refetch]
}
