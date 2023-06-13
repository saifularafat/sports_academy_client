import { useQuery } from "@tanstack/react-query";
import useAuth from "../component/useAuth";

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

// instructor Email
export const instructorsFetch = () => {
    const { user } = useAuth();
    const { data: instructor = [], refetch } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/classes?email=${user?.email}`)
            return res.json();
        }
    })
    return [instructor, refetch]
}

// BookMark user Email
export const BookMarkEmailFetch = () => {
    const { user } = useAuth();
    const { data: bookMark = [], refetch } = useQuery({
        queryKey: ['bookMark', user?.email],
        queryFn: async () => {
            const data = await fetch(`${import.meta.env.VITE_API_URL}/bookMarks?email=${user?.email}`)
            return data.json();
        }
    })
    return [bookMark, refetch]
}

