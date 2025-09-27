import { heroApi } from "../api/hero.api"
import type { SumaryResponse } from "../types/get-sumary.response";


export const getSumaryAction = async (): Promise<SumaryResponse> => {
    const { data } = await heroApi.get<SumaryResponse>('/summary', {})
    return data
};
