import { defineStore } from "pinia";
import type { UserModel } from "@/models/user.model";
import http from "@/services/http.service";

interface UserState {
  users: UserModel[];
}

async function fetchAndSaveUsers(endpoint: string, key: string, store: any) {
    try {
      const response = await http.get(endpoint);
      const data = response.data;
      const saved = JSON.stringify(data);
      localStorage.setItem(key, saved);
      store[key] = data;
      console.log(`Fetched and saved data for ${key}`);
    } catch (error: any) {
      console.error(`Error fetching data for ${key}: ${error.message}`);
    }
  }


export const useUserStore = defineStore({
  id: "user",
  state: (): UserState => ({
    users: [],
  }),
  getters: {
    getUsers(state): UserModel[] {
      const data = localStorage.getItem("users");
      return data ? JSON.parse(data) : state.users;
    },
  },
  actions: {
    async fetchUsers(): Promise<void> {
      await fetchAndSaveUsers("/users", "users", this);
    },
  },
});
