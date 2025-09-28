import type { HeroesResponse } from "../types/get-heroes.response";
import { heroApi } from "../api/hero.api"
import { assingImages } from "@/lib/utils";


interface Props {
    page: number
    limit?: number
    category?: string
}

export const getHeroesByPageAction = async ({ page, limit = 6, category = "all" }: Props): Promise<HeroesResponse> => {
    if (isNaN(page)) {
        page = 1
    }
    const { data } = await heroApi.get<HeroesResponse>('', {
        params: {
            limit: limit,
            offset: (page - 1) * limit,
            category: category
        }
    })
    const heroesWithImage = assingImages(data.heroes)
    return { ...data, heroes: heroesWithImage }
};