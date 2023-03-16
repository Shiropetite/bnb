import { defineStore } from "pinia";
import type { Home } from "@/models/Home";

export const usePopup = defineStore("popup", {
  state: () => ({
    isOpen: false,
    component: undefined as string | undefined,
    props: null as null | Home,
  }),

  actions: {
    openPopup(newComponent: string) {
      this.component = newComponent;

      if (!this.isOpen) {
        this.toggle();
      }
    },
    setProps(props: Home) {
      this.props = props;
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
