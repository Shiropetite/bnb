<script lang="ts" setup>
import { type Home, getTotalScore } from "@/models/Home";
import { usePopup } from "@/stores/popup";

const props = defineProps<{ home: Home }>();

const { openPopup, setProps } = usePopup();
setProps(props.home);
</script>

<template>
  <h1 class="mb-8">
    <!-- <img class="mr-12" src="/icons/translate.svg" /> -->
    <span>{{ home.title }}</span>
  </h1>

  <div class="row justify-between items-center">
    <div class="row items-center gap-4 wrap">
      <img src="/icons/star.svg" />
      <div class="subtitle">{{ getTotalScore(home.reviews).toFixed(1) }}</div>
      <div class="bold">·</div>
      <bnb-link
        class="subtitle"
        :label="`${home.reviews.length} commentaires`"
        @click="openPopup('comment-popup')"
        outlined
      />
      <div class="bold">·</div>
      <div class="subtitle underline">
        {{ home.location.city }}, {{ home.location.region }},
        {{ home.location.country }}
      </div>
    </div>

    <div class="row items-center gt-sm">
      <div class="row items-center gap-8 mr-12">
        <img src="/icons/share.svg" />
        <div class="subtitle underline">Partager</div>
      </div>
      <div class="row items-center gap-8">
        <img src="/icons/save.svg" />
        <div class="subtitle underline">Enregistrer</div>
      </div>
    </div>
  </div>
</template>
