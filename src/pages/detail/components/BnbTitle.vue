<script lang="ts" setup>
import { usePopup } from "@/stores/popup";

const { openPopup } = usePopup();
</script>

<template>
  <h1 class="mb-8">
    <img class="mr-12" src="/icons/translate.svg" />
    <span>Observatoire de la nature sur une île isolée</span>
  </h1>

  <div class="row justify-between items-center">
    <div class="row items-center gap-4 wrap">
      <img src="/icons/star.svg" />
      <div class="subtitle">4,71</div>
      <div class="bold">·</div>
      <bnb-link
        class="subtitle"
        label="43 commentaires"
        @click="openPopup('comment-popup')"
        outlined
      />
      <div class="bold">·</div>
      <div class="subtitle underline">Badachro, Écosse, Royaume-Uni</div>
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
