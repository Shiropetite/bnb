import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useDialog = defineStore('dialog', () => {
  const isOpen = ref(false);
 
  const toggle = () => { 
    isOpen.value = !isOpen.value
    if(isOpen.value) {
      document.body.style.overflowY = 'hidden'
    }
    else {
      document.body.style.overflowY = 'scroll'
    }
  }
  return { isOpen, toggle };
});
