<script lang="ts" setup>
import { ref, watch } from 'vue';

const props = defineProps<{
  modelValue: boolean
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const show = ref(false);
const hide = ref(true);
const appear = ref(false);
const disapear = ref(false);

watch(() => props.modelValue, (value) => {
  if (!value) {
    show.value = false;
    disapear.value = true;
    setTimeout(() => {
      disapear.value = false;
      hide.value = true;
    }, 500)
  }
  else {
    hide.value = false;
    appear.value = true;
    setTimeout(() => {
      appear.value = false;
      show.value = true;
    }, 500)
  }
})

</script>

<template>
  <div class="dialog-container" :class="{show, hide, appear, disapear}" @click="emits('update:modelValue', false)">
    <div class="dialog">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dialog-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.dialog {
  position: fixed;
  top: 40px;
  bottom: 40px;
  background-color: white;
  max-width: 780px;
  width: 100%;
  border-radius: 12px;
}

@keyframes fade-in {
  from {background-color: rgba(0,0,0,0)}
  to {background-color: rgba(0,0,0,0.4)}
}

@keyframes fade-out {
  from {background-color: rgba(0,0,0,0.4)}
  to {background-color: rgba(0,0,0,0)}
}

@keyframes slide-in {
  from {top: 100%}
  to {top: 40px}
}

@keyframes slide-out {
  from {top: 40px}
  to {top: 100%}
}

.hide {
  display: none !important;
}

.appear {
  animation-name: fade-in;
  animation-duration: 0.5s;

  .dialog {
    animation-name: slide-in;
    animation-duration: 0.5s;
  }
}

.disapear {
  animation-name: fade-out;
  animation-duration: 0.5s;

  .dialog {
    animation-name: slide-out;
    animation-duration: 0.5s;
  }
}
</style>