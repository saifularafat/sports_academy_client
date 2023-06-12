import { useQuery } from "@tanstack/react-query";

export const useAllInstructors = () => {
  const { data: instructors = [], refetch } = useQuery({
    queryKey: ["coach"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/instructors`);
      return res.json();
    },
  });
  return [instructors, refetch];
};
