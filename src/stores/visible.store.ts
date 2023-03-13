import { defineStore } from 'pinia';

interface VisibleState {
  isVisible: boolean;
}

export const useVisibleStore = defineStore('visible', {
  state: (): VisibleState => ({
    isVisible: false,
  }),
  actions: {
    toggleVisibilityOn() {
      this.isVisible = true;
    },

    toggleVisibilityOff() {
      this.isVisible = false;
    },
  },
});