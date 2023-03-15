import { defineStore } from "pinia";
import { decodeCredential } from "vue3-google-login";
import type { UserModel } from "@/models/user.model";
import router from "@/router";
import http from "@/services/http.service";

interface AuthState {
  authenticated: boolean;
  user: null | UserModel;
}

export const useAuthStore = defineStore({
  id: "auth",
  state: (): AuthState => ({
    authenticated: !!localStorage.getItem("token"),
    user: null,
  }),
  getters: {
    isAuthenticated(state): boolean {
      return state.authenticated;
    },
    getUser(state): any {
      if (state.user == null) {
        const idToken: any = localStorage.getItem("token");
        const user = decodeCredential(idToken);
        return user;
      } else {
        return state.user;
      }
    },
  },
  actions: {
    async login(res: any): Promise<void> {
      try {
        const token = res.credential;
        localStorage.setItem("token", token);

        const userData: any = decodeCredential(res.credential);

        this.user = {
          name: userData.name,
          email: userData.email,
          picture: userData.picture,
        };

        await http.post<UserModel>("/users", this.user);

        this.authenticated = true;

        router.push("/");
      } catch (error) {
        console.error("Error during login:", error);
        throw new Error("Failed to login");
      }
    },

    logout(): void {
      localStorage.removeItem("token");
      this.authenticated = false;
      this.user = null;
      router.push("/login");
    },
  },
});
