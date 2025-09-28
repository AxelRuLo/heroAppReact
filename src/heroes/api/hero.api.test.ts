import {  describe, expect, test } from 'vitest'
import { heroApi } from "./hero.api"

describe('HeroApi', () => {
    test("should be configure pointing to the testing server", () => {
        console.log(heroApi)
        expect(heroApi).toBeDefined()
        expect(heroApi.defaults.baseURL).toBeDefined()
        expect(heroApi.defaults.baseURL).toBe("http://localhost:3001/api/heroes")
    })
})