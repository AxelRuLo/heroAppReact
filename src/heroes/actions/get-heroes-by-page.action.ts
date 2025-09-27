import type { HeroesResponse } from "../types/get-heroes.response";
import { heroApi } from "../api/hero.api"

const BASE_URL = import.meta.env.VITE_API_URL

interface Props {
    page: number
    limit?: number
    category?: string
}

export const getHeroesByPageAction = async ({ page, limit = 6, category = "all" }: Props): Promise<HeroesResponse> => {
    if (isNaN(page)) {
        page = 1
    }
    console.log(category)
    const { data } = await heroApi.get<HeroesResponse>('', {
        params: {
            limit: limit,
            offset: (page - 1) * limit,
            category: category
        }
    })
    const heroesWithImage = data.heroes.map((heroe) => {
        return { ...heroe, image: `${BASE_URL}images/${heroe.image}` }
    })
    return { ...data, heroes: heroesWithImage }
};