import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Hero } from "@/heroes/types/hero.interface";

const BASE_URL = import.meta.env.VITE_API_URL

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "activo":
      return "bg-green-500";
    case "inactivo":
      return "bg-gray-500";
    case "retirado":
      return "bg-blue-500";
    default:
      return "bg-gray-500";
  }
};

export const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case "héroe":
      return "bg-blue-500";
    case "villano":
      return "bg-red-500";
    case "antihéroe":
      return "bg-purple-500";
    default:
      return "bg-gray-500";
  }
};

export const assingImages = (heroes: Hero[]): Hero[] => {
  // console.log("assign images",heroes)
  const heroesWithImage = heroes.map((heroe) => {
    return { ...heroe, image: `${BASE_URL}images/${heroe.image}` }
  })
  return heroesWithImage
}