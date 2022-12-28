<script lang="ts" setup>
import { ref, watch } from "vue";
import { usePopup } from "@/stores/popup";

const store = usePopup();

const show = ref(false);
const hide = ref(true);
const appear = ref(false);
const disapear = ref(false);

watch(
  () => store.isOpen,
  (value) => {
    if (!value) {
      show.value = false;
      disapear.value = true;
      setTimeout(() => {
        disapear.value = false;
        hide.value = true;
      }, 500);
    } else {
      hide.value = false;
      appear.value = true;
      setTimeout(() => {
        appear.value = false;
        show.value = true;
      }, 500);
    }
  }
);

const componentsMaxWidth: { [key: string]: number } = {
  "comment-popup": 1080,
  "bnb-equipment-popup": 780,
};

const closePopup = (e: Event) => {
  const element = e.target as HTMLElement;
  if (element.id === "popup-container") {
    store.toggle();
  }
};
</script>

<template>
  <div
    v-if="store.component"
    id="popup-container"
    class="popup-container"
    :class="{ show, hide, appear, disapear }"
    @click="closePopup"
  >
    <div
      class="popup"
      :style="`max-width: ${componentsMaxWidth[store.component]}px`"
    >
      <component :is="store.component" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  position: fixed;
  background-color: white;
  top: 40px;
  bottom: 40px;
  width: 100%;
  border-radius: 12px;
  z-index: 20;

  @media (max-width: $breakpoint-sm-max) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 0;
  }
}

@keyframes fade-in {
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0.4);
  }
}

@keyframes fade-out {
  from {
    background-color: rgba(0, 0, 0, 0.4);
  }
  to {
    background-color: rgba(0, 0, 0, 0);
  }
}

@keyframes slide-in {
  from {
    top: 100%;
  }
  to {
    top: 40px;
  }
}

@keyframes slide-out {
  from {
    top: 40px;
  }
  to {
    top: 100%;
  }
}

.hide {
  display: none !important;
}

.appear {
  animation-name: fade-in;
  animation-duration: 0.5s;

  .popup {
    animation-name: slide-in;
    animation-duration: 0.5s;
  }
}

.disapear {
  animation-name: fade-out;
  animation-duration: 0.5s;

  .popup {
    animation-name: slide-out;
    animation-duration: 0.5s;
  }
}
</style>
