<script lang="ts" setup>
import type { Amenity } from "@/models/Amenity";
import { usePopup } from "@/stores/popup";

const store = usePopup();

const getCategories = (amenities: Amenity[]): string[] => {
  const categories: string[] = [];
  amenities.forEach((e) => {
    if (!categories.includes(e.category)) {
      categories.push(e.category);
    }
  });
  return categories;
};
</script>

<template>
  <div>
    <div class="ma-12">
      <bnb-button
        class="gt-sm"
        icon="/icons/close.svg"
        @click="store.toggle()"
        round
      />
      <bnb-button
        class="lt-md"
        icon="/icons/arrow-left.svg"
        @click="store.toggle()"
        round
      />
    </div>
    <div class="popup-body">
      <div class="ma-24">
        <h2 class="mb-32">Ce que propose le logement</h2>

        <div
          class="mb-60"
          v-for="category in getCategories(store.props?.amenities!)"
          :key="category"
        >
          <h3 class="mb-40">{{ category }}</h3>
          <div
            v-for="(amenity, index) in store.props?.amenities.filter(
              (e) => e.category === category && e.isAvailable === true
            )"
            :key="amenity.name"
          >
            <div v-if="index > 0" class="separator"></div>
            <div class="mb-24 mt-24">
              <div class="col row items-center">
                <img class="mr-18" :src="`/icons/${amenity.icons}.svg`" />
                <div>{{ amenity.name }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-60">
          <h3 class="mb-40">Non inclus</h3>
          <div
            v-for="(amenity, index) in store.props?.amenities.filter(
              (e) => e.isAvailable === false
            )"
            :key="amenity.name"
          >
            <div v-if="index > 0" class="separator"></div>
            <div class="mb-24 mt-24 not-included">
              <div class="col row items-center">
                <img class="mr-18" :src="`/icons/no-${amenity.icons}.svg`" />
                <div>{{ amenity.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.popup-body {
  overflow-y: scroll;
  max-height: calc(100vh - 134px);

  @media (max-width: $breakpoint-sm-max) {
    max-height: 100vh;
  }
}

.not-included {
  text-decoration: line-through;
}
</style>
