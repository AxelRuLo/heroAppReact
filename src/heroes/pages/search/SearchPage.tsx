import CustomJumbotron from "@/components/custom/CustomJumbotron";
import HeroStats from "@/heroes/components/HeroStats";
import SearchControls from "./ui/SearchControls";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Superhero Search"
        description="Discover your favorite sueprheroues and villains"
      />
      <HeroStats />
      <SearchControls />
    </>
  );
};

export default SearchPage;
