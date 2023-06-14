import { useQuery } from "@tanstack/react-query";

export const popularSixClasses = () => {
  const { data: classes = [] } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/descendingPrice`);
      return res.json();
    },
  });
  return [classes];
};
