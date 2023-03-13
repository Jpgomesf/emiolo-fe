import { defineStore } from 'pinia';
import { decodeCredential } from 'vue3-google-login';
import type { CallbackTypes } from "vue3-google-login";
import type { UserModel } from '@/models/user.model';
import router from '@/router';

interface AuthState {
    authenticated: boolean,
    user: null | UserModel
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: (): AuthState => ({
    authenticated: !!localStorage.getItem('token'),
    user: null,
  }),
  getters: {
    isAuthenticated(state): boolean {
      return state.authenticated
    },
    getUser(state): any {
      return state.user;
    }
  },
  actions: {

    login(res: any): void {
        const token = res.credential;
        localStorage.setItem("token", token);

        const userData: any = decodeCredential(res.credential)

        this.user = {
            name: userData.name,
            email: userData.email,
            picture: userData.picture,
          }

        console.log(this.user)

        this.authenticated = true;

        router.push("/");
    },

    logout(): void {
      localStorage.removeItem('token');
      this.authenticated = false;
      this.user = null;
      router.push("/login")
    },
  },
});