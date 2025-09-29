import { describe, expect, test } from "vitest";
import { getSumaryAction } from "./get-sumary.action";

describe("getSumaryAction", () => {
    test("should fetch sumary complete information", async () => {
        const result = await getSumaryAction()
        expect(result).toMatchObject(
            {
                "totalHeroes": expect.any(Number),
                "strongestHero": expect.any(Object),
                "smartestHero": expect.any(Object),
                "heroCount": expect.any(Number),
                "villainCount": expect.any(Number),
            })
    })

})