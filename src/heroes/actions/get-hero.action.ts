import { heroApi } from "../api/hero.api"
import type { Hero } from "../types/hero.interface";

const BASE_URL = import.meta.env.VITE_API_URL

export const getHero = async (characterName:string): Promise<Hero> => {
    const { data } = await heroApi.get<Hero>(`/${characterName}`)
    data.image = `${BASE_URL}images/${data.image}`
    return data
};
