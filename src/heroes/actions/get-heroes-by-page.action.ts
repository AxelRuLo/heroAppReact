import type { HeroesResponse } from "../types/get-heroes.response";
import { heroApi } from "../api/hero.api"

const BASE_URL = import.meta.env.VITE_API_URL

export const getHeroesByPageAction = async (): Promise<HeroesResponse> => {
    const { data } = await heroApi.get<HeroesResponse>('')
    const heroesWithImage = data.heroes.map((heroe) => {
        return { ...heroe, image: `${BASE_URL}images/${heroe.image}` }
    })
    return { ...data, heroes: heroesWithImage }
};