import { defineStore } from "pinia";

export const usePopup = defineStore("popup", {
  state: () => ({
    isOpen: false,
    component: undefined as string | undefined,
  }),

  actions: {
    openPopup(newComponent: string) {
      this.component = newComponent;

      if (!this.isOpen) {
        this.toggle();
      }
    },
    toggle() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "scroll";
      }
    },
  },
});
