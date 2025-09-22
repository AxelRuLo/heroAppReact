import { lazy } from "react";
import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { HomePage } from "@/heroes/pages/home/HomePage";
import HeroesLayaout from "@/heroes/layaouts/HeroesLayout";
import AdminLayout from "@/admin/layaouts/AdminLayout";
import { createBrowserRouter, Navigate } from "react-router";

const SearchPage = lazy(()=>import("@/heroes/pages/search/SearchPage"))

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeroesLayaout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "hero/1",
        element: <HeroPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
