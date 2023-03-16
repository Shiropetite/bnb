<script lang="ts" setup>
import type { Home } from "@/models/Home";

defineProps<{ home: Home }>();
</script>

<template>
  <div>
    <div class="top-link">
      <bnb-button icon="/icons/arrow-left.svg" shadow round />
      <div class="row">
        <bnb-button class="mr-16" icon="/icons/mobile-share.svg" shadow round />
        <bnb-button icon="/icons/mobile-save.svg" shadow round />
      </div>
    </div>

    <div style="position: relative">
      <img class="cover-image" :src="home.photos[0].url" />
      <div class="counter-image caption bold">1 / {{ home.photos.length }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cover-image {
  position: static;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  max-height: 80%;
}

.top-link {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  z-index: 1;
}

.counter-image {
  color: white;
  position: absolute;
  bottom: 20px;
  right: 16px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 30px;
  padding: 4px 10px;
}
</style>
