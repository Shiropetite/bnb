<script lang="ts" setup>
import BnbSidebar from "./components/BnbSidebar.vue";

import MobilePhotos from "./components/MobilePhotos.vue";
import LaptopPhotos from "./components/LaptopPhotos.vue";
import BnbTitle from "./components/BnbTitle.vue";
import BnbSubtitle from "./components/BnbSubtitle.vue";

import BnbPromote from "./components/BnbPromote.vue";
import BnbAircover from "./components/BnbAircover.vue";
import BnbDescription from "./components/BnbDescription.vue";
import BnbRooms from "./components/BnbRooms.vue";
import BnbEquipment from "./components/BnbEquipment.vue";
import BnbLocation from "./components/BnbLocation.vue";
import MobileCommentSection from "./components/reviews/MobileCommentSection.vue";
import LaptopCommentSection from "./components/reviews/LaptopCommentSection.vue";
import BnbInformations from "./components/BnbInformations.vue";
import MobileRules from "./components/MobileRules.vue";
import LaptopRules from "./components/LaptopRules.vue";
import BnbDiscover from "./components/BnbDiscover.vue";
import BnbFooter from "./components/BnbFooter.vue";
import BnbSummary from "./components/BnbSummary.vue";
import BnbDate from "./components/BnbDate.vue";
import type { Home } from "@/models/Home";
import { onDeactivated, onMounted, ref, type Ref } from "vue";
import { getHomeById } from "@/services/home.service";

const home: Ref<Home | null> = ref(null);

const isLarge = ref(window.innerWidth > 980);

const handleResize = () => {
  isLarge.value = window.innerWidth > 980;
};

onMounted(async () => {
  window.addEventListener("resize", handleResize);

  const response = await getHomeById("abcde");
  home.value = response;
  home.value.photos.sort((a, b) => a.index - b.index);
});

onDeactivated(() => {
  window.removeEventListener("resize", handleResize);
});

const print = (text: string) => {
  console.log(text);
};
</script>

<template>
  <bnb-header class="gt-sm" />
  <bnb-summary class="gt-sm" v-if="home" :home="home" />

  <div v-if="home" class="row justify-center">
    <div class="detail-page">
      <mobile-photos class="lt-md" :home="home" />

      <div class="content">
        <div>
          <bnb-title :home="home" />
          <laptop-photos class="gt-sm" :home="home" />
          <div class="lt-md separator mt-24"></div>
        </div>

        <div class="row">
          <div class="container">
            <bnb-subtitle :home="home" />
            <div class="separator mt-24 mb-24"></div>
            <bnb-promote />
            <div class="separator mt-24 mb-24"></div>
            <bnb-aircover v-if="home.aircover" />
            <div class="separator mt-24 mb-24"></div>
            <bnb-description :home="home" />
            <div class="separator mt-32 mb-32"></div>
            <bnb-rooms :home="home" />
            <div class="separator mt-24 mb-32"></div>
            <bnb-equipment :home="home" />
            <div class="separator mt-24 mb-32"></div>
            <bnb-location v-if="isLarge" />
            <div class="separator mt-24 mb-32 gt-md"></div>
            <bnb-date />
          </div>

          <bnb-sidebar class="gt-sm" :home="home" />
        </div>
      </div>

      <div class="content">
        <div class="separator mb-32 gt-sm"></div>
        <laptop-comment-section class="gt-sm" :home="home" />
        <div class="separator mt-24 mb-32 lt-xs"></div>
        <bnb-location v-if="!isLarge" />
        <div class="separator mt-24 mb-32 lt-md"></div>
        <mobile-comment-section class="lt-md" :home="home" />
        <div class="separator mt-24 mb-32 lt-sm"></div>
        <bnb-informations :home="home" />
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

  <div v-if="home" class="price row items-center justify-between lt-md">
    <div>
      <div class="row items-end">
        <div class="title mr-4">{{ home.price }} €</div>
        <div class="subtitle">par nuit</div>
      </div>
      <div class="subtitle underline" @click="print('Open dates popup')">
        19-25 nov.
      </div>
    </div>

    <bnb-button
      label="Réserver"
      bg-color="gradient"
      @click="print('Open reservation popup')"
    />
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
