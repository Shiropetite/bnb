<script lang="ts" setup>
import { useDialog } from "@/stores/dialog";

const { openDialog } = useDialog();
</script>

<template>
  <div>
    <h2 class="mb-24">Ce que propose ce logement</h2>

    <div class="row items-center wrap">
      <div class="col col-xl-6 row items-center mb-14">
        <img class="gt-sm mr-18" src="/icons/waterfront.svg" />
        <div class="col row justify-between items-center">
          <div>Front de mer</div>
          <img class="lt-md mr-18" src="/icons/waterfront.svg" />
        </div>
      </div>

      <div class="col col-xl-6 row items-center mb-14">
        <img class="gt-sm mr-18" src="/icons/kitchen.svg" />
        <div class="col row justify-between items-center">
          <div>Cuisine</div>
          <img class="lt-md mr-18" src="/icons/kitchen.svg" />
        </div>
      </div>

      <div class="col col-xl-6 row items-center mb-14">
        <img class="gt-sm mr-18" src="/icons/wifi.svg" />
        <div class="col row justify-between items-center">
          <div>Wifi</div>
          <img class="lt-md mr-18" src="/icons/wifi.svg" />
        </div>
      </div>

      <div class="col col-xl-6 row items-center mb-14">
        <img class="gt-sm mr-18" src="/icons/dedicated-workspace.svg" />
        <div class="col row justify-between items-center">
          <div>Espace de travail dédié</div>
          <img class="lt-md mr-18" src="/icons/dedicated-workspace.svg" />
        </div>
      </div>

      <div class="col col-xl-6 row items-center mb-14">
        <img class="gt-sm mr-18" src="/icons/free-parking.svg" />
        <div class="col row justify-between items-center">
          <div>Parking gratuit sur place</div>
          <img class="lt-md mr-18" src="/icons/free-parking.svg" />
        </div>
      </div>

      <div class="col col-xl-6 row items-center mb-14 gt-lg">
        <img class="mr-18" src="/icons/jacuzzi.svg" />
        <div>Jacuzzi privé</div>
      </div>

      <div class="col col-xl-6 row items-center mb-14 gt-lg">
        <img class="mr-18" src="/icons/pet.svg" />
        <div>Animaux acceptés</div>
      </div>

      <div class="col col-xl-6 row items-center mb-14 gt-lg">
        <img class="mr-18" src="/icons/television.svg" />
        <div>Télévision</div>
      </div>

      <div class="col col-xl-6 row items-center mb-14 gt-lg">
        <img class="mr-18" src="/icons/washing-machine.svg" />
        <div>Lave-linge</div>
      </div>

      <div class="col col-xl-6 row items-center mb-14 gt-lg">
        <img class="mr-18" src="/icons/patio.svg" />
        <div>Patio ou balcon</div>
      </div>
    </div>

    <bnb-button
      class="mt-10 equipment-btn"
      label="Afficher les 37 équipement"
      border="dark"
      @click="openDialog('bnb-equipment-dialog', 780)"
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
