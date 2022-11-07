<script lang="ts" setup>
import BnbSidebar from './components/BnbSidebar.vue';

import MobilePhotos from './components/MobilePhotos.vue';
import LaptopPhotos from './components/LaptopPhotos.vue';
import BnbTitle from './components/BnbTitle.vue';
import BnbSubtitle from './components/BnbSubtitle.vue';

import BnbPromote from './components/BnbPromote.vue';
import BnbAircover from './components/BnbAircover.vue';
import BnbDescription from './components/BnbDescription.vue';
import BnbRooms from './components/BnbRooms.vue';
import BnbEquipment from './components/BnbEquipment.vue';
import BnbLocation from './components/BnbLocation.vue';
import MobileReviews from './components/MobileReviews.vue';
import LaptopReviews from './components/LaptopReviews.vue';
import BnbInformations from './components/BnbInformations.vue';
import MobileRules from './components/MobileRules.vue';
import LaptopRules from './components/LaptopRules.vue';
import BnbDiscover from './components/BnbDiscover.vue';
import BnbFooter from './components/BnbFooter.vue';
import BnbSummary from './components/BnbSummary.vue';

const print = (text: string) => {
  console.log(text);
};

</script>

<template>
  <bnb-header class="gt-sm" />
  <bnb-summary class="gt-sm" />
  <div class="row justify-center">
    <div class="detail-page">
      <mobile-photos class="lt-md" />

      <div class="content">
        <div>
          <bnb-title />

          <laptop-photos class="gt-sm" />

          <div class="lt-md separator mt-24"></div>
        </div>

        <div class="row">
          <div class="container">

            <bnb-subtitle />

            <div class="separator mt-24 mb-24"></div>

            <bnb-promote />

            <div class="separator mt-24 mb-24"></div>

            <bnb-aircover />

            <div class="separator mt-24 mb-24"></div>

            <bnb-description />

            <div class="separator mt-32 mb-32"></div>

            <bnb-rooms />

            <div class="separator mt-24 mb-32"></div>

            <bnb-equipment />

            <div class="separator mt-24 mb-32"></div>

            <bnb-location class="lt-md" />

            <div class="separator mt-24 mb-32 lt-md"></div>

            <h2 class="mb-8">6 nuit à Badachro</h2>
            <div class="subtitle text-dark-grey mb-24">19 nov. 2022 - 25 nov. 2022</div>
            <div class="row items-center justify-between">
              <bnb-calendar class="col col-xl-6" month="Novembre" :year="2022" />
              <bnb-calendar class="col col-xl-6 gt-lg" month="Décembre" :year="2022" />
            </div>
          </div>

          <bnb-sidebar class="gt-sm" />
        </div>
      </div>

      <div class="content">
        <div class="separator mb-32"></div>

        <laptop-reviews class="gt-sm" />

        <div class="separator mt-24 mb-32 gt-sm"></div>

        <bnb-location class="gt-sm" />

        <div class="separator mt-24 mb-32 gt-sm"></div>

        <mobile-reviews class="lt-md" />

        <div class="separator mt-24 mb-32 lt-md"></div>

        <bnb-informations />

        <div class="separator mt-24 mb-24"></div>

        <mobile-rules class="lt-md" />
        <laptop-rules class="gt-sm" />
      </div>

      <div style="height: 10px" class="separator lt-md"></div>

      <bnb-discover class="content lt-md" />

      <div class="mt-16 separator lt-md"></div>
    </div>
  </div>

  <div class="mt-16 separator gt-sm"></div>

  <div class="bg-almost-white row justify-center">
    <div class="detail-page">
      <div class="content-discover gt-sm">
        <bnb-discover />
      </div>

      <div class="separator gt-sm"></div>

      <bnb-footer class="content subtitle footer" />
    </div>
  </div>

  <div class="price row items-center justify-between lt-md">
    <div>
      <div class="row items-end">
        <div class="title mr-4">172 €</div>
        <div class="subtitle">par nuit</div>
      </div>
      <div class="subtitle underline" @click="print('Open dates popup')">19-25 nov.</div>
    </div>

    <bnb-button label="Réserver" bg-color="gradient" @click="print('Open reservation popup')" />
  </div>
</template>

<style lang="scss" scoped>
.price {
  background-color: white;
  border-top: solid 1px $light-grey;
  padding: 16px 24px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.detail-page {
  max-width: 1280px;

  .content {
    padding: 24px;

    @media (min-width: $breakpoint-md-min) {
      padding: 24px 40px;
    }

    @media (min-width: $breakpoint-lg-min) {
      padding: 24px 80px;
    }
  }

  .content-discover {
    padding: 24px;

    @media (min-width: $breakpoint-md-min) {
      padding: 48px 40px;
    }

    @media (min-width: $breakpoint-lg-min) {
      padding: 48px 80px;
    }
  }
}

.footer {
  padding-bottom: 104px !important;

  @media (min-width: $breakpoint-md-min) {
    padding: 40px !important;
  }

  @media (min-width: $breakpoint-lg-min) {
    padding: 40px 80px !important;
  }
}

.container {
  width: 66.66%;

  @media (max-width: $breakpoint-sm-max) {
    width: 100%;
  }
}
</style>
