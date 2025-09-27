import { useQuery } from "@tanstack/react-query";
import { getHero } from "../actions/get-hero.action";

interface Props {
  slug: string;
}

const useHero = ({ slug }: Props) => {
  console.log(slug);
  return useQuery({
    queryKey: ["hero", { slug }],
    queryFn: () => getHero(slug),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};

export default useHero;
