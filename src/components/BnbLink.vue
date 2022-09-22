<script setup lang="ts">
defineProps<{
  label?: string;
  to?: string;
  href?: string;
  target?: string;
  color?: string;
  outlined?: boolean;
}>();

</script>

<template>
  <div>
    <a class="bnb-a" :class="{ outlined }" :style="`color: ${color}`">
      <span>{{ label }}</span>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.bnb-a {
  font-weight: 600;
  transition: text-decoration linear 0.1s;

  &:hover {
    text-decoration: underline;
  }
}

.outlined {
  text-decoration: underline;

  &:hover {
    color: black !important;
  }
}
</style>
