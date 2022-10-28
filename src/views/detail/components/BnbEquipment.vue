<template>
  <div>
    <h2 class="mb-24">Ce que propose ce logement</h2>

    <div class="row items-center wrap">
      <div class="col col-xl-6 row items-center mb-14">
        <img class="mr-18" src="@/assets/icons/waterfront.svg" />
        <div>Front de mer</div>
      </div>

      <div class="col col-xl-6 row items-center mb-14">
        <img class="mr-18" src="@/assets/icons/kitchen.svg" />
        <div>Cuisine</div>
      </div>

      <div class="col col-xl-6 row items-center mb-14">
        <img class="mr-18" src="@/assets/icons/wifi.svg" />
        <div>Wifi</div>
      </div>

      <div class="col col-xl-6 row items-center mb-14">
        <img class="mr-18" src="@/assets/icons/dedicated-workspace.svg" />
        <div>Espace de travail dédié</div>
      </div>

      <div class="col col-xl-6 row items-center mb-24">
        <img class="mr-18" src="@/assets/icons/free-parking.svg" />
        <div>Parking gratuit sur place</div>
      </div>
    </div>
    

    <bnb-button
      class="equipment-btn"
      label="Afficher les 37 équipement"
      border="dark"
    />
  </div>
</template>
<style lang="scss" scoped>
.equipment-btn {
  @media (max-width: $breakpoint-sm-max) {
    width: 100%;
  }
}
</style>
