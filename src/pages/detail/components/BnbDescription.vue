<script lang="ts" setup>
import type { Home } from "@/models/Home";

defineProps<{ home: Home }>();
</script>

<template>
  <div>
    <!-- <div class="row mb-32">
      <div class="mr-12">
        <img src="/icons/translate.svg" style="height: 16px; width: 16px" />
      </div>
      <div class="subtitle">
        <span class="mr-4"
          >Certaines informations ont été traduites automatiquement.</span
        >
        <span class="bold"> Afficher la version originale </span>
      </div>
    </div> -->

    <div
      class="mb-16"
      style="
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
      "
    >
      {{ home.description }}
    </div>

    <div class="row items-center">
      <div class="subtitle bold underline mr-4">En savoir plus</div>
      <img src="/icons/arrow-right.svg" style="height: 12px; width: 12px" />
    </div>
  </div>
</template>
