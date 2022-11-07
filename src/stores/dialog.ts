import { defineStore } from 'pinia';

export const useDialog = defineStore('dialog', {
  state: () => ({
    isOpen: false,
    component: undefined
  }),

  actions: {
    openDialog(newComponent: string) {
      this.component = newComponent;

      if (!this.isOpen) { this.toggle(); }
    },
    toggle() {
      this.isOpen = !this.isOpen
      if(this.isOpen) {
        document.body.style.overflowY = 'hidden'
      }
      else {
        document.body.style.overflowY = 'scroll'
      }
    }
  }
});
