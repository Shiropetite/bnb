<script setup lang="ts">
import { ref } from 'vue';

type Size = 'sm' | 'lg';
type BgColor = 'dark' | 'primary' | 'gradient';

defineProps<{
  label?: string;
  to?: string;
  href?: string;
  target?: string;
  icon?: string;
  iconRight?: string;
  iconLeft?: string;
  border?: string;
  size?: Size;
  bgColor?: BgColor;
  rounded?: boolean;
  shadow?: boolean;
  round?: boolean;
}>()

const showDropdown = ref(false);
</script>

<template>
  <div class="bnb-dropdown-button">
    <bnb-button 
      :label="label"  
      :to="to"
      :href="href"
      :target="target"
      :icon="icon"
      :icon-right="iconRight"
      :icon-left="iconLeft"
      :border="border"
      :size="size"
      :bg-color="bgColor"
      :rounded="rounded"
      :shadow="shadow"
      :round="round"
      @click="showDropdown = !showDropdown"
    />

    <div v-if="showDropdown" class="dropdown-menu">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.bnb-dropdown-button { position: relative; }

.dropdown-menu {
  position: absolute;
  background-color: white;
  margin-top: 10px;
  border-radius: 15px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
  box-shadow: -4px -4px 16px rgba(0, 0, 0, 0.1);
  z-index: 2;
  width: 280px;
  right: 0;
  padding: 8px 0;
}
</style>