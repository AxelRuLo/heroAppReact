import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomJumbotron from "@/components/custom/CustomJumbotron";
import HeroStats from "@/heroes/components/HeroStats";
import HeroGrid from "@/heroes/components/HeroGrid";
import CustomPagination from "@/components/custom/CustomPagination";
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

type TabState = "all" | "favorites" | "heroes" | "villains";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<TabState>("all");

  // THIS SHOULD BE ALWAYS AVOIDED, BETTER USE TANSTACK
  // useEffect(() => {
  //   getHeroesByPage().then((result) => {
  //     console.log(result);
  //   });
  // }, []);
  const { data : HeroesResponse } = useQuery({
    queryKey: ["heroes"],
    queryFn: getHeroesByPageAction,
    staleTime: 1000 * 60 * 5,
  });
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
      <Tabs value={activeTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
            All Characters (16)
          </TabsTrigger>
          <TabsTrigger
            value="favorites"
            className="flex items-center gap-2"
            onClick={() => setActiveTab("favorites")}
          >
            Favorites (3)
          </TabsTrigger>
          <TabsTrigger value="heroes" onClick={() => setActiveTab("heroes")}>
            Heroes (12)
          </TabsTrigger>
          <TabsTrigger
            value="villains"
            onClick={() => setActiveTab("villains")}
          >
            Villains (2)
          </TabsTrigger>
        </TabsList>

        <TabsContent value={"all"}>
          <h1>All Character</h1>
          <HeroGrid heroes={HeroesResponse?.heroes} />
        </TabsContent>
        <TabsContent value={"favorites"}>
          <h1>Favorites</h1>
          <HeroGrid />
        </TabsContent>
        <TabsContent value={"heroes"}>
          <h1>Heroes</h1>
          <HeroGrid />
        </TabsContent>
        <TabsContent value={"villains"}>
          <h1>Villains</h1>
          <HeroGrid />
        </TabsContent>
      </Tabs>
      <CustomPagination totalPages={10}></CustomPagination>
    </>
  );
};
