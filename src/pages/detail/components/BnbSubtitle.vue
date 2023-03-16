<script lang="ts" setup>
import type { Home } from "@/models/Home";

defineProps<{ home: Home }>();
</script>

<template>
  <div class="mt-24 row items-center justify-between mb-8">
    <div style="margin-right: 120px">
      <h2>
        <div>{{ home.homeCategory }}</div>
        <div>· Chez {{ home.owner.firstName }}</div>
      </h2>
      <div class="row items-center gap-4 wrap gt-sm">
        <div>{{ home.capacity }} voyageurs</div>
        <div>·</div>
        <div>{{ home.nbRooms }} chambre</div>
        <div>·</div>
        <div>{{ home.nbBeds }} lit</div>
        <div>·</div>
        <div>{{ home.nbBathrooms }} salle de bain</div>
      </div>
    </div>
    <img class="profile-picture" :src="home.owner.profilePicture" />
  </div>

  <div class="row items-center gap-4 wrap lt-md">
    <div>{{ home.capacity }} voyageurs</div>
    <div>·</div>
    <div>{{ home.nbRooms }} chambre</div>
    <div>·</div>
    <div>{{ home.nbBeds }} lit</div>
    <div>·</div>
    <div>{{ home.nbBathrooms }} salle de bain</div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  @media (min-width: $breakpoint-sm-max) {
    display: flex;
    gap: 8px;
  }
}
</style>
