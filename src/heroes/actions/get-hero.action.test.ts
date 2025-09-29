import { describe, expect, test } from "vitest";
import { getHero } from "./get-hero.action";

describe("getHeroAction", () => {
    test("should fethc hero data an terurn whit comple image url", async () => {
        const result = await getHero("bruce-wayne")
        expect(result.alias).toBe("Batman")
        expect(result.image).toBe("http://localhost:3001/images/2.jpeg")
    })
    test("should trowh an erro if hero is not found", async () => {
        await expect(getHero("batman")).rejects.toMatchObject({
            "message": "Request failed with status code 404",
        })
    })


})