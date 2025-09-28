import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { appRouter } from "./router/app.routes";
import FavoriteHeroContext from "./heroes/context/FavoriteHeroContext";

const queryClient = new QueryClient();

const HeroesApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoriteHeroContext>
        <RouterProvider router={appRouter}></RouterProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </FavoriteHeroContext>
    </QueryClientProvider>
  );
};

export default HeroesApp;
