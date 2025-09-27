import type { Hero } from "./hero.interface";

export interface SumaryResponse {
    totalHeroes: number;
    strongestHero: Hero;
    smartestHero: Hero;
    heroCount: number;
    villainCount: number;
}
