import * as z from "zod";
import type { Hero } from "../types/hero.interface";
import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

const Favorities = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    alias: z.string(),
    powers: z.array(z.string()),
    description: z.string(),
    strength: z.number(),
    intelligence: z.number(),
    speed: z.number(),
    durability: z.number(),
    team: z.string(),
    image: z.string(),
    firstAppearance: z.string(),
    status: z.string(),
    category: z.string(),
    universe: z.string(),
  })
);

interface FavoriteHeroContext {
  favorities: Hero[];
  favoritiesCount: number;

  isFavorite: (hero: Hero) => boolean;
  toggleFavorite: (hero: Hero) => void;
}

const getFavoritiesFromLocalStorage = () => {
  const favorities = localStorage.getItem("list_favorities");
  if (!favorities) return [];
  try {
    const jsonFavorities = JSON.parse(favorities);
    const parseResult = Favorities.safeParse(jsonFavorities);
    if (parseResult.success) return parseResult.data;
    return [];
  } catch {
    return [];
  }
};

// eslint-disable-next-line react-refresh/only-export-components
export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

export const FavoriteHeroContextProvider = ({
  children,
}: PropsWithChildren) => {
  const [favorities, setFavorities] = useState<Hero[]>(getFavoritiesFromLocalStorage);

  const isFavorite = (hero: Hero): boolean =>
    favorities.some((f) => f.id == hero.id);

  const toggleFavorite = (hero: Hero) => {
    const heroExist = favorities.find((f) => f.id == hero.id);
    if (heroExist) {
      setFavorities((value) => {
        return value.filter((h) => h.id != hero.id);
      });
      return;
    }

    setFavorities([...favorities, hero]);
  };

  useEffect(() => {
    localStorage.setItem("list_favorities", JSON.stringify(favorities));
  }, [favorities]);

  console.log(favorities)

  return (
    <FavoriteHeroContext
      value={{
        favoritiesCount: favorities.length,
        toggleFavorite: toggleFavorite,
        isFavorite: isFavorite,
        favorities: favorities,
      }}
    >
      {children}
    </FavoriteHeroContext>
  );
};

export default FavoriteHeroContextProvider;
