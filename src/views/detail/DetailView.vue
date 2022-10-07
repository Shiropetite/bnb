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

          <h2 class="mb-24">Où se situe le logement</h2>

          <div
            class="mb-24 map row items-center justify-center rounded"
            @click="print('Open map popup')"
          >
            Map
          </div>

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
            L'île Dry est située dans les eaux tranquilles de Gair Loch
            (littéralement le «loch court»), où les Mackenzies vivent, pêchent
            et cultivent depuis le 15e siècle. Le propriétaire actuel de Dry
            Island, Ian McWhinney, est un descendant des Mackenzy et il pêche
            encore des mollusques et des crustacés de l'île. Il est très heureux
            d'emmener les visiteurs récolter les langoustines, les crabes et les
            homards squats de ses fouines.
          </div>

          <div
            class="row items-center"
            @click="print('Open location description popup')"
          >
            <div class="subtitle bold underline mr-4">En savoir plus</div>
            <img
              src="@/assets/icons/arrow-right.svg"
              style="height: 12px; width: 12px"
            />
          </div>

          <div class="separator mt-24 mb-32"></div>

          <h2 class="mb-8">6 nuit à Badachro</h2>
          <div class="subtitle text-dark-grey mb-24">
            19 nov. 2022 - 25 nov. 2022
          </div>
          <bnb-calendar month="Novembre" :year="2022" />

          <div class="separator mt-24 mb-32"></div>

          <div class="row items-center mb-32">
            <div class="mr-8 row items-center">
              <img
                src="@/assets/icons/star.svg"
                style="width: 16px; height: 16px"
              />
            </div>
            <h2>4,72 · 43 commentaires</h2>
          </div>

          <bnb-review class="mb-24" @click="print('Open reviews popup')" />

          <bnb-button
            style="width: 100%"
            label="Afficher les 43 commentaires"
            border="dark"
            @click="print('Open reviews popup')"
          />

          <div class="separator mt-24 mb-32"></div>

          <div class="row items-center justify-between mb-24">
            <div>
              <h2 class="mb-8">Proposé par Ian</h2>
              <div class="subtitle text-dark-grey">Membre depuis mai 2015</div>
              <div class="subtitle text-dark-grey">Professionnel</div>
            </div>

            <img
              class="profile-picture"
              src="https://a0.muscache.com/im/users/33563060/profile_pic/1438769657/original.jpg?im_w=240"
              @click="print('Open profile page')"
            />
          </div>

          <div class="row items-center mb-16">
            <div class="mr-8 row items-center">
              <img
                src="@/assets/icons/star.svg"
                style="width: 16px; height: 16px"
              />
            </div>
            <div>376 commentaires</div>
          </div>

          <div class="row items-center mb-24">
            <div class="mr-8 row items-center">
              <img
                src="@/assets/icons/identity-verified.svg"
                style="width: 16px; height: 16px"
              />
            </div>
            <div>Identité vérifiée</div>
          </div>

          <div class="mb-24">
            pêcheur de Gairloch , local à Badachro. La famille vit sur Dry
            Island depuis des centaines d'années....
            <span class="bold underline">lire la suite</span>
          </div>

          <div class="bold mb-8">Pendant votre séjour</div>

          <div class="mb-24">
            Vous vous sentirez à l'aise à l'extrémité nord de l'île, à l'abri de
            toute perturbation de notre part ou de la part des voyageurs
            séjournant dans l'autre propriété. Avec un arrang…
            <span class="bold underline">lire la suite</span>
          </div>

          <div class="mb-8">Langue : English</div>

          <div class="mb-8">Taux de réponse : 64%</div>

          <div class="mb-24">Délai de réponse : Dans la journée</div>

          <bnb-button
            class="mb-24"
            style="width: 100%"
            label="Contacter l’hôte"
            border="dark"
            @click="print('Open popup to sign in')"
          />

          <div class="row items-center">
            <div class="caption mr-16">
              Pour protéger votre paiement, ne transférez jamais d'argent et ne
              communiquez pas en dehors du site ou de l'application Airbnb.
            </div>
            <div><img src="@/assets/icons/bnb-warning.svg" /></div>
          </div>

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
                Les partiques de sécurité d’Airbnb liées au Covid-19
                s’appliquent
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

        <bnb-sidebar class="gt-sm" />
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

  .map {
    background-color: $light-grey;
    width: 100%;
    height: 218px;
  }

  .content {
    padding: 24px;

    @media (min-width: $breakpoint-md-min) {
      padding: 24px 40px;
    }
  }
}
</style>
