import { describe, expect, test } from "vitest";
import { getHeroesByPageAction } from "./get-heroes-by-page.action";
import AxiosMockAdapter from "axios-mock-adapter"
import { heroApi } from "../api/hero.api";
import { beforeEach } from "node:test";

const BASE_URL = import.meta.env.VITE_API_URL

describe("getHeroByPageAction", () => {
    const newMockAxiosAdapter = new AxiosMockAdapter(heroApi)
    const responseObj = {
        total: 10,
        pages: 2,
        heroes: [
            { image: '1.jpg' },
            { image: '2.jpg' },
        ],
    }

    beforeEach(() => {
        newMockAxiosAdapter.reset()
        newMockAxiosAdapter.resetHistory()
    })

    test("should fetch sumary complete information", async () => {
        newMockAxiosAdapter.resetHistory()
        newMockAxiosAdapter.onGet("/").reply(200, responseObj)
        const response = await getHeroesByPageAction({ page: 1 })
        expect(response).toStrictEqual({
            total: 10,
            pages: 2,
            heroes: [
                { image: `${BASE_URL}images/1.jpg` },
                { image: `${BASE_URL}images/2.jpg` },
            ],
        })
        expect(newMockAxiosAdapter.history[0].params).toStrictEqual({ offset: 0, limit: 6, category: "all" })

    })


    test("should fetch sumary complete information even when the page its not a number", async () => {
        newMockAxiosAdapter.resetHistory()
        newMockAxiosAdapter.onGet("/").reply(200, responseObj)
        const response = await getHeroesByPageAction({ page: "asdf" as unknown as number })

        expect(response).toStrictEqual({
            total: 10,
            pages: 2,
            heroes: [
                { image: `${BASE_URL}images/1.jpg` },
                { image: `${BASE_URL}images/2.jpg` },
            ],
        })
        expect(newMockAxiosAdapter.history[0].params).toStrictEqual({ offset: 0, limit: 6, category: "all" })
    })

})