import { defineStore } from 'pinia';
import star from '@/services/star.service';
import type { PlanetModel } from '@/models/planet.model';
import type { CharacterModel } from '@/models/character.model';
import type { ShipModel } from '@/models/ship.model';

interface StarInterface {
  planet: PlanetModel | null;
  characters: CharacterModel[] | null;
  ships: ShipModel[] | null;
}

async function fetchAndSaveData(endpoint: string, key: string, store: any) {
  try {
    const response = await star.get(endpoint);
    const data = response.data.results;
    const saved = JSON.stringify(data);
    localStorage.setItem(key, saved);
    store[key] = data;
    console.log(`Fetched and saved data for ${key}`);
  } catch (error: any) {
    console.error(`Error fetching data for ${key}: ${error.message}`);
  }
}

export const useStarStore = defineStore({
  id: 'star',
  state: (): StarInterface => ({
    planet: null,
    characters: null,
    ships: null,
  }),
  getters: {
    getCharacters(state) {
      const data = localStorage.getItem('chars');
      return data ? JSON.parse(data) : state.characters;
    },
    getShips(state) {
      const data = localStorage.getItem('ships');
      return data ? JSON.parse(data) : state.ships;
    },
  },
  actions: {
    async fetchCharacters() {
      await fetchAndSaveData('people/', 'chars', this);
    },
    async fetchShips() {
      await fetchAndSaveData('starships/', 'ships', this);
    },
  },
});