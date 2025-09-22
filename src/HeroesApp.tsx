import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.routes";

const HeroesApp = () => {
  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
};

export default HeroesApp;
