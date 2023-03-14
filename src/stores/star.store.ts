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

async function fetchAndSaveDataArray(endpoint: string, key: string, store: any) {
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

async function fetchAndSaveData(endpoint: string, key: string, store: any) {
  try{
    const response = await star.get(endpoint);
    const data = response.data;
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
    getCharacters(state): CharacterModel[] | null {
      const data = localStorage.getItem('chars');
      return data ? JSON.parse(data) : state.characters;
    },
    getShips(state):  ShipModel[] | null {
      const data = localStorage.getItem('ships');
      return data ? JSON.parse(data) : state.ships;
    },
    getPlanet(state): PlanetModel | null {
      const data = localStorage.getItem('planet');
      return data ? JSON.parse(data) : state.planet;
    }
  },
  actions: {
    async fetchCharacters() {
      if(localStorage.getItem('chars')) {
        return;
      } else {
        await fetchAndSaveDataArray('people/', 'chars', this);
      }
    },
    async fetchShips() {
      if(localStorage.getItem('ships')) {
        return;
      } else {
        await fetchAndSaveDataArray('starships/', 'ships', this);
      }
    },
    async fetchPlanet() {
      if(localStorage.getItem('planet')) {
        return;
      } else {
        await fetchAndSaveData('planets/1', 'planet', this);
      }
    }
  },
});