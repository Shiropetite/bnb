<script lang="ts" setup>
import { ref, watch } from 'vue';
import BnbEquipmentDialog from './BnbEquipmentDialog.vue';
import { useDialog } from '@/stores/dialog';

const { toggle } = useDialog();
const isOpen = ref(false);

watch(isOpen, () => {
  toggle();
})
</script>

<template>
  <div>
    <h2 class="mb-24">Ce que propose ce logement</h2>

    <div class="row items-center wrap">
      <div class="col col-xl-6 row items-center mb-14">
        <img class="mr-18" src="/icons/waterfront.svg" />
        <div>Front de mer</div>
      </div>

      <div class="col col-xl-6 row items-center mb-14">
        <img class="mr-18" src="/icons/kitchen.svg" />
        <div>Cuisine</div>
      </div>

      <div class="col col-xl-6 row items-center mb-14">
        <img class="mr-18" src="/icons/wifi.svg" />
        <div>Wifi</div>
      </div>

      <div class="col col-xl-6 row items-center mb-14">
        <img class="mr-18" src="/icons/dedicated-workspace.svg" />
        <div>Espace de travail dédié</div>
      </div>

      <div class="col col-xl-6 row items-center mb-14">
        <img class="mr-18" src="/icons/free-parking.svg" />
        <div>Parking gratuit sur place</div>
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

    <bnb-button class="mt-10 equipment-btn" label="Afficher les 37 équipement" border="dark" @click="isOpen = true" />
    <bnb-dialog v-model="isOpen" >
      <bnb-equipment-dialog />
    </bnb-dialog> 
    
  </div>
</template>
<style lang="scss" scoped>
.equipment-btn {
  @media (max-width: $breakpoint-sm-max) {
    width: 100%;
  }
}
</style>
