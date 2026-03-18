/**
 * useHero Hook
 * Simplified hook to get hero data by key
 */

import { heroesEN } from '../data/heroes/heroes.en';
import { heroesAF } from '../data/heroes/heroes.af';
import type { HeroData } from '../data/heroes/types';

export function useHero(key: string, lang: 'en' | 'af' = 'en'): HeroData | null {
  const heroes = lang === 'af' ? heroesAF : heroesEN;
  return heroes[key] || null;
}
