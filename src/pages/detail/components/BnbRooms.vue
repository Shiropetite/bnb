<script lang="ts" setup>
import type { Bed } from "@/models/BedRoom";
import type { Home } from "@/models/Home";

defineProps<{ home: Home }>();

const formatedBeds = (beds: Bed[]): { nb: number; type: string }[] => {
  const formatedBeds: { nb: number; type: string }[] = [];
  beds.forEach((bed) => {
    const currentBed = formatedBeds.find((b) => b.type === bed);
    if (currentBed) {
      formatedBeds[formatedBeds.indexOf(currentBed)].nb++;
    } else {
      formatedBeds.push({ nb: 1, type: bed });
    }
  });
  return formatedBeds;
};
</script>

<template>
  <div>
    <h2 class="mb-24">Où vous dormirez</h2>

    <div v-for="(bedroom, index) in home.bedrooms" :key="index">
      <img
        v-if="bedroom.imageUrl"
        class="bed-picture rounded mb-16"
        :src="bedroom.imageUrl"
      />

      <div class="bold mb-4">Chambre {{ index + 1 }}</div>
      <div class="subtitle">
        <span
          v-for="(bed, bedIndex) in formatedBeds(bedroom.beds)"
          :key="bedIndex"
        >
          {{ bed.nb }} {{ bed.type }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bed-picture {
  width: 180px;
  height: 120px;
}
</style>
