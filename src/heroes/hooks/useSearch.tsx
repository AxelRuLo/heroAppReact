import { useQuery } from "@tanstack/react-query";
import { getSearch } from "../actions/get-search-hero.action";

interface Props {
  name: string;
  strength: number;
}

const useSearch = ({ name, strength }: Props) => {
  return useQuery({
    queryKey: ["heroSearch", { name, strength }],
    queryFn: () => getSearch({ name,strength }),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};

export default useSearch;
