<script lang="ts" setup>
defineProps<{
  inline?: boolean;
}>();

// TODO: Update when mock of entire property
const mockReviewGrades = {
  cleanliness: 4.6,
  communication: 4.7,
  checkIn: 4.7,
  accury: 4.8,
  location: 5,
  value: 4.5,
};

// TODO: Remove when translation is added
const labels = {
  cleanliness: "Propreté",
  communication: "Communication",
  checkIn: "Arrivée",
  accury: "Précision",
  location: "Emplacement",
  value: "Qualité-prix",
};
</script>

<template>
  <div class="row justify-between wrap mb-32">
    <div
      class="row justify-between mb-16"
      :class="inline ? 'col-6' : 'col'"
      v-for="(value, key) in mockReviewGrades"
      :key="key"
    >
      <div>{{ labels[key] }}</div>
      <div class="row items-center">
        <span class="grade" :style="`width: ${(value * 102) / 5}px;`" />
        <span class="back" />
        <div class="caption bold">{{ value.toFixed(1) }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.col-6 {
  width: 45%;
}

.grade {
  background-color: $dark;
  height: 4px;
  position: absolute;
  border-radius: 2px;
}

.back {
  width: 102px;
  height: 4px;
  background-color: $light-grey;
  margin-right: 12px;
  border-radius: 2px;
}
</style>
