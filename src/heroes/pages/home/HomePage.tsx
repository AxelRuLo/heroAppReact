import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomJumbotron from "@/components/custom/CustomJumbotron";
import HeroStats from "@/heroes/components/HeroStats";
import HeroGrid from "@/heroes/components/HeroGrid";
import CustomPagination from "@/components/custom/CustomPagination";
import { useSearchParams } from "react-router";
import { useContext, useMemo } from "react";
import useHeroSumary from "@/heroes/hooks/useHeroSumary";
import usePaginatedHero from "@/heroes/hooks/usePaginatedHero";
import { FavoriteHeroContext } from "@/heroes/context/FavoriteHeroContext";

type TabState = "all" | "favorites" | "heroes" | "villains";
const validTabs: TabState[] = ["all", "favorites", "heroes", "villains"];

export const HomePage = () => {
  // THIS SHOULD BE ALWAYS AVOIDED, BETTER USE TANSTACK
  // useEffect(() => {
  //   getHeroesByPage().then((result) => {
  //     console.log(result);
  //   });
  // }, []);

  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get("activeTab") ?? "all";
  const page = searchParams.get("page") ?? 1;
  const limit = searchParams.get("limit") ?? 6;
  const category = searchParams.get("category") ?? "all";
  const processedTab = useMemo(() => {
    return validTabs.includes(activeTab as TabState) ? activeTab : "all";
  }, [activeTab]);

  const { data: HeroesResponse } = usePaginatedHero({
    page: +page,
    limit: +limit,
    category,
  });

  const { data: SumaryResponse } = useHeroSumary();
  const { favoritiesCount, favorities } = useContext(FavoriteHeroContext);

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Superhero Universe"
        description="Discover,exploere and manage your favorite sueprheroues and villains"
      />
      {/* Stats Dashboard */}
      <HeroStats />

      {/* Controls */}

      {/* Advanced Filters */}

      {/* Tabs */}
      <Tabs value={processedTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger
            value="all"
            onClick={() =>
              setSearchParams((searchParams) => {
                searchParams.set("activeTab", "all");
                searchParams.set("category", "all");
                searchParams.set("page", "1");
                return searchParams;
              })
            }
          >
            <h1 className="hidden md:block">All Characters</h1>
            <h1 className="block md:hidden">All</h1>(
            {SumaryResponse?.totalHeroes})
          </TabsTrigger>
          <TabsTrigger
            value="favorites"
            className="flex items-center gap-2"
            onClick={() =>
              setSearchParams((searchParams) => {
                searchParams.set("activeTab", "favorites");
                searchParams.set("page", "1");
                return searchParams;
              })
            }
          >
            <h1 className="hidden md:block">Favorites</h1>
            <h1 className="block md:hidden">Favs</h1>({favoritiesCount})
          </TabsTrigger>
          <TabsTrigger
            value="heroes"
            onClick={() =>
              setSearchParams((searchParams) => {
                searchParams.set("activeTab", "heroes");
                searchParams.set("category", "hero");
                searchParams.set("page", "1");
                return searchParams;
              })
            }
          >
            Heroes ({SumaryResponse?.heroCount})
          </TabsTrigger>
          <TabsTrigger
            value="villains"
            onClick={() =>
              setSearchParams((searchParams) => {
                searchParams.set("activeTab", "villains");
                searchParams.set("category", "villain");
                searchParams.set("page", "1");
                return searchParams;
              })
            }
          >
            <h1 className="hidden md:block">Villains</h1>
            <h1 className="block md:hidden">Vils</h1>(
            {SumaryResponse?.villainCount})
          </TabsTrigger>
        </TabsList>

        <TabsContent value={"all"}>
          <h1>All Character</h1>
          <HeroGrid heroes={HeroesResponse?.heroes} />
        </TabsContent>
        <TabsContent value={"favorites"}>
          <h1>Favorites</h1>
          <HeroGrid heroes={favorities} />
        </TabsContent>
        <TabsContent value={"heroes"}>
          <h1>Heroes</h1>
          <HeroGrid heroes={HeroesResponse?.heroes} />
        </TabsContent>
        <TabsContent value={"villains"}>
          <h1>Villains</h1>
          <HeroGrid heroes={HeroesResponse?.heroes} />
        </TabsContent>
      </Tabs>
      {processedTab !== "favorites" && (
        <CustomPagination
          totalPages={HeroesResponse?.pages ?? 1}
        ></CustomPagination>
      )}
    </>
  );
};
