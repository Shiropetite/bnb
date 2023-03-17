<script setup lang="ts">
defineProps<{
  src: string;
}>();

const base = "/bnb";
</script>

<template>
  <img :src="`${base}${src}`" />
</template>
