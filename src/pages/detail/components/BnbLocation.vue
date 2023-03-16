<template>
  <div>
    <h2 class="mb-24">Où se situe le logement</h2>

    <div id="map" class="map mb-24" />

    <div class="bold mb-16">Cristal temple, Beach city, Terre</div>
    <div
      class="mb-16"
      style="
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      "
    >
    Le Crystal Temple est un endroit sacré où les gemmes de cristal vivent. C'est leur base depuis laquel elle protège l'humanité. 
    Dans le temple, il y a plusieurs caverne qui sont connecté par le coeur de cristal.
    </div>

    <div class="row items-center">
      <div class="subtitle bold underline mr-4">En savoir plus</div>
      <img src="/icons/arrow-right.svg" style="height: 12px; width: 12px" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.map {
  width: 100%;
  height: 380px;
  background-color: rgb(129, 129, 129);
  border-radius: 8px;

  @media (min-width: $breakpoint-md-min) {
    height: 480px;
  }
}
</style>
