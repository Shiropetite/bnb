<script setup lang="ts">
defineProps<{
  label?: string;
  to?: string;
  href?: string;
  target?: string;
  color?: string;
  outlined?: boolean;
  arrow?: boolean;
}>();
</script>

<template>
  <a
    class="bnb-link row items-center"
    :class="{ outlined }"
    :style="`color: ${color}`"
  >
    <span>{{ label }}</span>
    <img
      v-if="arrow"
      class="ml-4"
      src="/icons/arrow-right.svg"
      style="height: 12px; width: 12px"
    />
  </a>
</template>

<style lang="scss" scoped>
.bnb-link {
  transition: text-decoration linear 0.1s;

  &:hover {
    text-decoration: underline;
  }
}

.outlined {
  text-decoration: underline;
}
</style>
