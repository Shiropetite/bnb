import { defineStore } from "pinia";

export const useDialog = defineStore("dialog", {
  state: () => ({
    isOpen: false,
    component: undefined as string | undefined,
    maxWidth: undefined as number | undefined,
  }),

  actions: {
    openDialog(newComponent: string, maxWidth: number) {
      this.component = newComponent;
      this.maxWidth = maxWidth;

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
