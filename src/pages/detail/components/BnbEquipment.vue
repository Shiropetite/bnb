<script lang="ts" setup>
import type { Home } from "@/models/Home";
import { usePopup } from "@/stores/popup";

const props = defineProps<{ home: Home }>();

const { openPopup, setProps } = usePopup();
setProps(props.home);
</script>

<template>
  <div>
    <h2 class="mb-24">Ce que propose ce logement</h2>

    <div class="row items-center wrap">
      <div
        class="col col-xl-6 row items-center mb-14"
        v-for="amenity in home.amenities
          .filter((e) => e.isAvailable === true)
          .filter((_, i) => i < 5)"
        :key="amenity.name"
      >
        <img class="gt-sm mr-18" :src="`/icons/${amenity.icons}.svg`" />
        <div class="col row justify-between items-center">
          <div>{{ amenity.name }}</div>
          <img class="lt-md mr-18" :src="`/icons/${amenity.icons}.svg`" />
        </div>
      </div>
    </div>

    <bnb-button
      class="mt-10 equipment-btn"
      :label="`Afficher les ${home.amenities.length} équipements`"
      border="dark"
      @click="openPopup('bnb-equipment-popup')"
    />
  </div>
</template>
<style lang="scss" scoped>
.equipment-btn {
  @media (max-width: $breakpoint-sm-max) {
    width: 100%;
  }
}
</style>
