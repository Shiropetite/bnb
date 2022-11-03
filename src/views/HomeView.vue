<script setup lang="ts">
import BnbButton from 'src/components/BnbButton.vue';
import BnbLink from 'src/components/BnbLink.vue';
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 8px">
    <bnb-button label="Préférences de cookies" border="dark" size="lg" />
    <bnb-button label="OK" border="dark" size="lg" bg-color="dark" />
    <bnb-button label="Devenez hôte" rounded />
    <bnb-button
      icon-left="/bnb/src/assets/burger-menu.svg"
      icon-right="/bnb/src/assets/account.svg"
      border="light"
      size="sm"
      rounded
      shadow
      dense
    />
    <bnb-button label="Afficher la carte" icon-right="src/assets/map-icon.svg" size="lg" rounded bg-color="dark" />
    <bnb-button icon="/bnb/src/assets/language.svg" round />
    <bnb-button icon="/bnb/src/assets/search-icon.svg" bg-color="primary" round />
    <bnb-button icon-left="src/assets/search-icon.svg" label="Rechercher" bg-color="gradient" rounded />

    <bnb-link label="Assistance et ressources" href="a" />
    <bnb-link label="Politique en matière de cookies" href="a" outlined />
  </div>
</template>
