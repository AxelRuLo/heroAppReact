import { assingImages } from "@/lib/utils";
import { heroApi } from "../api/hero.api"
import type { Hero } from "../types/hero.interface";

interface Props {
    name?: string,
    team?: string,
    category?: string,
    universe?: string,
    status?: string,
    strength?: number,
}

export const getSearch = async ({ name, team, category, universe, status, strength }: Props): Promise<Hero[]> => {
    if (!name && !team && !category && !universe && !status && !strength) return []
    const { data } = await heroApi.get<Hero[]>(`/search/`, {
        params: {
            name,
            strength
        }
    })
    const searchResponse = assingImages(data)
    return searchResponse
};
