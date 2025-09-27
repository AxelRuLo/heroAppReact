import useHero from "@/heroes/hooks/useHero";
import { useParams } from "react-router";
import HeroHeadBanner from "./components/HeroHeadBanner";
import HeroTabs from "./components/HeroTabs";

export function HeroPage() {
  const { slugId = "" } = useParams();
  const { data: superheroData, isError } = useHero({ slug: slugId });

  if (isError) {
    return <h1>error</h1>;
  }

  if (!superheroData) {
    return <h3>loading</h3>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <HeroHeadBanner superheroData={superheroData}></HeroHeadBanner>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <HeroTabs superheroData={superheroData}></HeroTabs>
      </div>
    </div>
  );
}
