import { Badge } from "@/components/ui/badge";
import { Heart, Trophy, Users, Zap } from "lucide-react";
import HeroStatCard from "./HeroStatCard";
import CustomBreadCrums from "@/components/custom/CustomBreadCrums";
import useHeroSumary from "../hooks/useHeroSumary";

export const HeroStats = () => {
  const { data: SumaryResponse } = useHeroSumary();
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <HeroStatCard
          title={"Total Characters"}
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
        >
          <div className="text-2xl font-bold">
            {SumaryResponse?.totalHeroes}
          </div>

          <Badge variant="secondary" className="text-xs">
            {SumaryResponse?.heroCount} Heroes
          </Badge>
          <Badge variant="destructive" className="text-xs">
            {SumaryResponse?.villainCount} Villains
          </Badge>
        </HeroStatCard>

        <HeroStatCard
          title={"Favorites"}
          icon={<Heart className="h-4 w-4 text-muted-foreground" />}
        >
          <div className="text-2xl font-bold text-red-600">3</div>
          <p className="text-xs text-muted-foreground">18.8% of total</p>
        </HeroStatCard>

        <HeroStatCard
          title={"Strongest"}
          icon={<Zap className="h-4 w-4 text-muted-foreground" />}
        >
          <div className="text-lg font-bold">
            {SumaryResponse?.strongestHero.alias}
          </div>
          <p className="text-xs text-muted-foreground">
            Strength: {SumaryResponse?.strongestHero.strength}/10
          </p>
        </HeroStatCard>

        <HeroStatCard
          title={"Smartest"}
          icon={<Trophy className="h-4 w-4 text-muted-foreground" />}
        >
          <div className="text-lg font-bold">
            {SumaryResponse?.smartestHero.alias}
          </div>
          <p className="text-xs text-muted-foreground">
            Intelligence: {SumaryResponse?.smartestHero.intelligence}/10
          </p>
        </HeroStatCard>
      </div>
      <div>
        <CustomBreadCrums></CustomBreadCrums>
      </div>
    </>
  );
};

export default HeroStats;
