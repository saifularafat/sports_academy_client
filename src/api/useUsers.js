
import { useQuery } from "@tanstack/react-query"

export const allUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/users`)
        return res.json()
    })
    return[users, refetch]
}