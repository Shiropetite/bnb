<script lang="ts" setup>
import type { Home } from "@/models/Home";

defineProps<{ home: Home }>();
</script>

<template>
  <div class="laptop-photos">
    <div class="container">
      <div class="box row items-center">
        <img class="image-1" :src="home.photos[0].url" />
        <div class="small-image">
          <img class="image" :src="home.photos[1].url" />
          <img class="image image-bottom" :src="home.photos[2].url" />
        </div>
        <div class="small-image">
          <img class="image image-top-left" :src="home.photos[3].url" />
          <img
            class="image image-bottom image-bottom-left"
            :src="home.photos[4].url"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.laptop-photos {
  padding: 24px 0px;
}

.container {
  position: relative;
  height: 0 !important;
  padding-top: 320px !important;

  @media (min-width: $breakpoint-lg-min) {
    padding-top: 380px !important;
  }

  @media (min-width: $breakpoint-xl-min) {
    padding-top: 420px !important;
  }
}

.box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 320px;
  max-height: 380px;

  @media (min-width: $breakpoint-xl-min) {
    max-height: 420px !important;
  }
}

.image-1 {
  width: 50%;
  height: 100%;
  border-radius: 30px 0 0 30px;
  object-fit: cover;
}

.small-image {
  width: 25%;
  padding-left: 8px;
  min-height: 320px;
  height: 100%;
}

.image {
  width: 100%;
  height: 49% !important;
  object-fit: cover;
}

.image-top-left {
  border-radius: 0 30px 0 0;
}

.image-bottom-left {
  border-radius: 0 0 30px 0;
}
</style>
