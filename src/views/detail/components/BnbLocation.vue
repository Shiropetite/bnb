<template>
  <div>
    <h2 class="mb-24">Où se situe le logement</h2>

    <div class="mb-24 map row items-center justify-center rounded">Map</div>

    <div class="bold mb-16">Badachro, Écosse, Royaume-Uni</div>
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
      L'île Dry est située dans les eaux tranquilles de Gair Loch (littéralement le «loch court»), où les Mackenzies
      vivent, pêchent et cultivent depuis le 15e siècle. Le propriétaire actuel de Dry Island, Ian McWhinney, est un
      descendant des Mackenzy et il pêche encore des mollusques et des crustacés de l'île. Il est très heureux d'emmener
      les visiteurs récolter les langoustines, les crabes et les homards squats de ses fouines.
    </div>

    <div class="row items-center">
      <div class="subtitle bold underline mr-4">En savoir plus</div>
      <img src="@/assets/icons/arrow-right.svg" style="height: 12px; width: 12px" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.map {
  background-color: $light-grey;
  width: 100%;
  height: 218px;

  @media (min-width: $breakpoint-md-min) {
    height: 480px;
  }
}
</style>
