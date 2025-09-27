import { useQuery } from "@tanstack/react-query";
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.action";

interface Props {
  page: number;
  limit?: number;
  category?: string;
}

const usePaginatedHero = ({ page, category = "all", limit = 6 }: Props) => {
  return useQuery({
    queryKey: ["heroes", { page, limit, category }],
    queryFn: () =>
      getHeroesByPageAction({ page: page, limit: limit, category }),
    staleTime: 1000 * 60 * 5,
  });
};

export default usePaginatedHero;
