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
import MobileReviews from "./components/MobileReviews.vue";
import LaptopReviews from "./components/LaptopReviews.vue";
import BnbInformations from "./components/BnbInformations.vue";

const print = (text: string) => {
  console.log(text);
};
</script>

<template>
  <bnb-header class="gt-sm" />
  <div class="detail-page">
    <mobile-photos class="lt-md" />

    <div class="content">
      <div>
        <bnb-title />

        <laptop-photos class="gt-sm" />

        <div class="lt-md separator mt-24"></div>
      </div>

      <div class="row">
        <div>
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
          <div class="subtitle text-dark-grey mb-24">
            19 nov. 2022 - 25 nov. 2022
          </div>
          <bnb-calendar month="Novembre" :year="2022" />
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

      <div
        class="row items-center justify-between"
        @click="print('Open rules of procedure popup')"
      >
        <div class="mr-12">
          <h2 class="mb-8">Règlement intérieur</h2>
          <div class="subtitle text-dark-grey">Arrivée : 16:00 - 22:00</div>
        </div>
        <img src="@/assets/icons/arrow-right.svg" />
      </div>

      <div class="separator mt-24 mb-24"></div>

      <div
        class="row items-center justify-between"
        @click="print('Open security popup')"
      >
        <div class="mr-12">
          <h2 class="mb-8">Santé et sécurité</h2>
          <div class="subtitle text-dark-grey">
            Les partiques de sécurité d’Airbnb liées au Covid-19 s’appliquent
          </div>
        </div>
        <img src="@/assets/icons/arrow-right.svg" />
      </div>

      <div class="separator mt-24 mb-24"></div>

      <div
        class="row items-center justify-between"
        @click="print('Open terms of cancelation popup')"
      >
        <div class="mr-12">
          <h2 class="mb-8">Conditions d’annulation</h2>
          <div class="subtitle text-dark-grey mb-8">
            Annulation gratuite pendant 48 heures.
          </div>
          <div class="subtitle text-dark-grey">
            Consultez les conditions d'annulation complètes de l'hôte, qui
            s'appliquent même si vous annulez pour cause de maladie ou de
            perturbations causées par le Covid-19.
          </div>
        </div>
        <img src="@/assets/icons/arrow-right.svg" />
      </div>

      <div class="separator mt-24 mb-24"></div>

      <div class="row" @click="print('Open popup to sign in')">
        <div class="mr-16"><img src="@/assets/icons/signal.svg" /></div>
        <div class="bold underline">Signaler cette annonce</div>
      </div>
    </div>

    <div style="height: 10px" class="separator"></div>

    <div class="content">
      <h2 class="mb-32">
        Découvrez d'autres possibilités d'hébergement · Badachro et ses environs
      </h2>
      <div class="row subtitle text-dark-grey wrap gap-16 mb-32">
        <div class="col-6" @click="print('Open search')">
          Scottish-Highlands
        </div>
        <div class="col-6" @click="print('Open search')">Inverness</div>
        <div class="col-6" @click="print('Open search')">Port William</div>
        <div class="col-6" @click="print('Open search')">Portree</div>
        <div class="col-6" @click="print('Open search')">Oban</div>
        <div class="col-6" @click="print('Open search')">Glencoe</div>
        <div class="col-6" @click="print('Open search')">Galway</div>
        <div class="col-6" @click="print('Open search')">Dublin</div>
        <div class="col-6" @click="print('Open search')">Liverpool</div>
        <div class="col-6" @click="print('Open search')">Belfast</div>
        <div class="col-6" @click="print('Open search')">Glasgow</div>
        <div class="col-6" @click="print('Open search')">
          Newcastle upon Tyne
        </div>
      </div>

      <div class="row wrap subtitle items-center gap-8">
        <div @click="print('return to /')">Airbnb</div>
        <div>
          <img
            src="@/assets/icons/arrow-right.svg"
            style="height: 7px; width: 7px"
          />
        </div>
        <div @click="print('Open search')">Royaume-Uni</div>
        <div>
          <img
            src="@/assets/icons/arrow-right.svg"
            style="height: 7px; width: 7px"
          />
        </div>
        <div @click="print('Open search')">Écosse</div>
        <div>
          <img
            src="@/assets/icons/arrow-right.svg"
            style="height: 7px; width: 7px"
          />
        </div>
        <div @click="print('Open search')">Highland Council</div>
        <div>
          <img
            src="@/assets/icons/arrow-right.svg"
            style="height: 7px; width: 7px"
          />
        </div>
        <div @click="print('Open search')">Skye</div>
      </div>
    </div>

    <div class="mt-16 separator"></div>

    <div
      class="content subtitle"
      style="background: $almost-white; padding-bottom: 104px"
    >
      <div class="column gap-12">
        <div class="bold">Assistance</div>
        <div @click="print('Go to page')">Centre d’aide</div>
        <div @click="print('Go to page')">AirCover</div>
        <div @click="print('Go to page')">Informations de sécurité</div>
        <div @click="print('Go to page')">
          Soutenir les personnes en situation de handicap
        </div>
        <div @click="print('Go to page')">Options d'annulation</div>
        <div @click="print('Go to page')">Nos mesures face au Covid-19</div>
        <div @click="print('Go to page')">
          Signaler un problème de voisinage
        </div>

        <div class="mt-24 mb-24 separator"></div>

        <div class="bold">Communauté</div>
        <div @click="print('Go to page')">
          Airbnb.org : réponse aux catastrophes
        </div>
        <div @click="print('Go to page')">Soutenir les réfugiés afghans</div>
        <div @click="print('Go to page')">Lutte contre la discramation</div>

        <div class="mt-24 mb-24 separator"></div>

        <div class="bold">Accueil de voyageurs</div>
        <div @click="print('Go to page')">Devenir hôte</div>
        <div @click="print('Go to page')">AirCover pour les hôtes</div>
        <div @click="print('Go to page')">Ressources pour les hôtes</div>
        <div @click="print('Go to page')">Forum de la communauté</div>
        <div @click="print('Go to page')">
          Accueillir de manière responsable
        </div>

        <div class="mt-24 mb-24 separator"></div>

        <div class="bold">Airbnb</div>
        <div @click="print('Go to page')">Newsroom</div>
        <div @click="print('Go to page')">
          En savoir plus sur les nouveautés
        </div>
        <div @click="print('Go to page')">Lettre de nos fondateurs</div>
        <div @click="print('Go to page')">Carrières</div>
        <div @click="print('Go to page')">Investisseurs</div>
        <div @click="print('Go to page')">Cartes cadeaux</div>
      </div>

      <div class="mt-24 mb-24 separator"></div>

      <div class="row mb-16">
        <img
          class="mr-8"
          src="@/assets/icons/language.svg"
          @click="print('Open language popup')"
        />
        <div class="bold mr-32" @click="print('Open language popup')">
          Français (FR)
        </div>
        <div class="bold" @click="print('Open currency popup')">€ EUR</div>
      </div>

      <div>© 2022 Airbnb, Inc.</div>
      <div @click="print('Go to page')">
        Confidentialité · Conditions générales · Plan du site · Fonctionnement
        du site · Infos sur l’entreprise
      </div>
    </div>

    <div class="price row items-center justify-between lt-md">
      <div>
        <div class="row items-end">
          <div class="title mr-4">172 €</div>
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
  </div>
</template>

<style lang="scss" scoped>
@import "@/css/variables.scss";
.detail-page {
  .price {
    background-color: white;
    border-top: solid 1px $light-grey;
    padding: 16px 24px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .content {
    padding: 24px;

    @media (min-width: $breakpoint-md-min) {
      padding: 24px 40px;
    }
  }
}
</style>
