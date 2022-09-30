<script lang="ts" setup>
import BnbButton from "../components/BnbButton.vue";
import BnbCalendar from "../components/BnbCalendar.vue";
const print = (text: string) => {
  console.log(text);
};
</script>

<template>
  <div class="detail-page">
    <div class="photo">
      <div class="top-link">
        <bnb-button
          icon="src/assets/icons/arrow-left.svg"
          @click="print('Go back /homes')"
          shadow
          round
        />
        <div class="row">
          <bnb-button
            class="mr-16"
            icon="src/assets/icons/share.svg"
            @click="print('Open popup to share')"
            shadow
            round
          />
          <bnb-button
            icon="src/assets/icons/save.svg"
            @click="print('Open popup to sign in')"
            shadow
            round
          />
        </div>
      </div>

      <div @click="print('Open photos')" style="position: relative">
        <img
          class="cover-image"
          src="https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=1200"
        />

        <div class="counter-image caption bold">1 / 19</div>
      </div>
    </div>

    <div class="content">
      <h1 class="mb-8">
        <img class="mr-12" src="@/assets/icons/translate.svg" />
        <span>Observatoire de la nature sur une île isolée</span>
      </h1>

      <div class="row items-center gap-4 wrap">
        <img src="@/assets/icons/star.svg" />
        <div class="subtitle">4,71</div>
        <div class="bold">·</div>
        <div
          class="subtitle underline"
          @click="print('Open testimonial popup')"
        >
          43 commentaires
        </div>
        <div class="bold">·</div>
        <div class="subtitle underline" @click="print('Open map popup')">
          Badachro, Écosse, Royaume-Uni
        </div>
      </div>

      <div class="separator mt-24 mb-24"></div>

      <div class="row items-center justify-between mb-8">
        <h2>
          <div>Îles</div>
          <div><span class="bold">·</span> Chez Ian</div>
        </h2>
        <img
          class="profile-picture"
          src="https://a0.muscache.com/im/users/33563060/profile_pic/1438769657/original.jpg?im_w=240"
          @click="print('Scroll down to description')"
        />
      </div>

      <div class="row items-center gap-4 wrap">
        <div>2 voyageurs</div>
        <div class="bold">·</div>
        <div>1 chambre</div>
        <div class="bold">·</div>
        <div>1 lit</div>
        <div class="bold">·</div>
        <div>1 salle de bain</div>
      </div>

      <div class="separator mt-24 mb-24"></div>

      <div class="row items-center mb-24">
        <img class="mr-18" src="@/assets/icons/pet.svg" />
        <div>
          <div class="bold">Amis à quatre pattes bienvenus</div>
          <div class="subtitle text-dark-grey">
            Emmenez vos animaux de compagnie avec vous.
          </div>
        </div>
      </div>

      <div class="row items-center">
        <img class="mr-18" src="@/assets/icons/calendar.svg" />
        <div>
          <div class="bold">Annulation gratuite pendant 48 heures.</div>
        </div>
      </div>

      <div class="separator mt-24 mb-24"></div>

      <div>
        <img class="mb-16" src="@/assets/aircover.png" />
        <div class="subtitle mb-16">
          Chaque réservation comprend une protection gratuite en cas
          d'annulation par l'hôte, d'inexactitudes dans la description du
          logement, ainsi que d'autres problèmes comme les difficultés d'accès
          au logement.
        </div>
        <div
          class="subtitle bold underline"
          @click="print('Open aircover popup')"
        >
          En savoir plus
        </div>
      </div>

      <div class="separator mt-24 mb-24"></div>

      <div class="row mb-32">
        <div class="mr-12">
          <img
            src="@/assets/icons/translate.svg"
            style="height: 16px; width: 16px"
          />
        </div>
        <div class="subtitle">
          <span class="mr-4"
            >Certaines informations ont été traduites automatiquement.</span
          >
          <span class="bold">Afficher la version originale</span>
        </div>
      </div>

      <div
        class="mb-16"
        style="
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
        "
      >
        Chalet indépendant quantitatif niché en douceur dans l'île familiale
        historique de Dry Island. "Otter Cabin" est aménagé à un haut niveau
        avec une chambre double, salle de douche, cuisine ouverte et salon et
        son propre bain à remous et terrasse. Il s'agit d'une unité de
        restauration traditionnelle. Les éléments de base de la cuisine et le
        linge de maison sont fournis. Une connexion Wi-Fi haut débit est
        disponible. Malheureusement, la cabine est inaccessible aux personnes à
        mobilité réduite.
      </div>

      <div class="row items-center">
        <div class="subtitle bold underline mr-4">En savoir plus</div>
        <img
          src="@/assets/icons/arrow-right.svg"
          style="height: 12px; width: 12px"
        />
      </div>

      <div class="separator mt-32 mb-32"></div>

      <h2 class="mb-24">Où vous dormirez</h2>

      <img
        class="bed-picture rounded mb-16"
        src="https://a0.muscache.com/im/pictures/fab1b622-41b2-4a69-bf73-0a8204ac06d4.jpg?im_w=720"
      />

      <div class="bold mb-4">Chambre</div>
      <div class="subtitle">1 lit double</div>

      <div class="separator mt-24 mb-32"></div>

      <h2 class="mb-24">Ce que propose ce logement</h2>

      <div class="row items-center mb-14">
        <img class="mr-18" src="@/assets/icons/waterfront.svg" />
        <div>Front de mer</div>
      </div>

      <div class="row items-center mb-14">
        <img class="mr-18" src="@/assets/icons/kitchen.svg" />
        <div>Cuisine</div>
      </div>

      <div class="row items-center mb-14">
        <img class="mr-18" src="@/assets/icons/wifi.svg" />
        <div>Wifi</div>
      </div>

      <div class="row items-center mb-14">
        <img class="mr-18" src="@/assets/icons/dedicated-workspace.svg" />
        <div>Espace de travail dédié</div>
      </div>

      <div class="row items-center mb-24">
        <img class="mr-18" src="@/assets/icons/free-parking.svg" />
        <div>Parking gratuit sur place</div>
      </div>

      <bnb-button
        style="width: 100%"
        label="Afficher les 37 équipement"
        border="dark"
      />

      <div class="separator mt-24 mb-32"></div>

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
        L'île Dry est située dans les eaux tranquilles de Gair Loch
        (littéralement le «loch court»), où les Mackenzies vivent, pêchent et
        cultivent depuis le 15e siècle. Le propriétaire actuel de Dry Island,
        Ian McWhinney, est un descendant des Mackenzy et il pêche encore des
        mollusques et des crustacés de l'île. Il est très heureux d'emmener les
        visiteurs récolter les langoustines, les crabes et les homards squats de
        ses fouines.
      </div>

      <div class="row items-center">
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

      <bnb-review class="mb-24" />

      <bnb-button
        style="width: 100%"
        label="Afficher les 43 commentaires"
        border="dark"
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
        pêcheur de Gairloch , local à Badachro. La famille vit sur Dry Island
        depuis des centaines d'années....
        <span class="bold underline">lire la suite</span>
      </div>

      <div class="bold mb-8">Pendant votre séjour</div>

      <div class="mb-24">
        Vous vous sentirez à l'aise à l'extrémité nord de l'île, à l'abri de
        toute perturbation de notre part ou de la part des voyageurs séjournant
        dans l'autre propriété. Avec un arrang…
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
      />

      <div class="row items-center">
        <div class="caption mr-16">
          Pour protéger votre paiement, ne transférez jamais d'argent et ne
          communiquez pas en dehors du site ou de l'application Airbnb.
        </div>
        <div><img src="@/assets/icons/bnb-warning.svg" /></div>
      </div>

      <div class="separator mt-24 mb-24"></div>

      <div class="row items-center justify-between">
        <div class="mr-12">
          <h2 class="mb-8">Règlement intérieur</h2>
          <div class="subtitle text-dark-grey">Arrivée : 16:00 - 22:00</div>
        </div>
        <img src="@/assets/icons/arrow-right.svg" />
      </div>

      <div class="separator mt-24 mb-24"></div>

      <div class="row items-center justify-between">
        <div class="mr-12">
          <h2 class="mb-8">Santé et sécurité</h2>
          <div class="subtitle text-dark-grey">
            Les partiques de sécurité d’Airbnb liées au Covid-19 s’appliquent
          </div>
        </div>
        <img src="@/assets/icons/arrow-right.svg" />
      </div>

      <div class="separator mt-24 mb-24"></div>

      <div class="row items-center justify-between">
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

      <div class="row">
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
        <div class="col-6">Scottish-Highlands</div>
        <div class="col-6">Inverness</div>
        <div class="col-6">Port William</div>
        <div class="col-6">Portree</div>
        <div class="col-6">Oban</div>
        <div class="col-6">Glencoe</div>
        <div class="col-6">Galway</div>
        <div class="col-6">Dublin</div>
        <div class="col-6">Liverpool</div>
        <div class="col-6">Belfast</div>
        <div class="col-6">Glasgow</div>
        <div class="col-6">Newcastle upon Tyne</div>
      </div>

      <div class="row wrap subtitle items-center gap-8">
        <div>Airbnb</div>
        <div>
          <img
            src="@/assets/icons/arrow-right.svg"
            style="height: 7px; width: 7px"
          />
        </div>
        <div>Royaume-Uni</div>
        <div>
          <img
            src="@/assets/icons/arrow-right.svg"
            style="height: 7px; width: 7px"
          />
        </div>
        <div>Écosse</div>
        <div>
          <img
            src="@/assets/icons/arrow-right.svg"
            style="height: 7px; width: 7px"
          />
        </div>
        <div>Highland Council</div>
        <div>
          <img
            src="@/assets/icons/arrow-right.svg"
            style="height: 7px; width: 7px"
          />
        </div>
        <div>Skye</div>
      </div>
    </div>

    <div class="mt-16 separator"></div>

    <div
      class="content subtitle"
      style="background: $almost-white; padding-bottom: 80px"
    >
      <div class="column gap-12">
        <div class="bold">Assistance</div>
        <div>Centre d’aide</div>
        <div>AirCover</div>
        <div>Informations de sécurité</div>
        <div>Soutenir les personnes en situation de handicap</div>
        <div>Options d'annulation</div>
        <div>Nos mesures face au Covid-19</div>
        <div>Signaler un problème de voisinage</div>

        <div class="mt-24 mb-24 separator"></div>

        <div class="bold">Communauté</div>
        <div>Airbnb.org : réponse aux catastrophes</div>
        <div>Soutenir les réfugiés afghans</div>
        <div>Lutte contre la discramation</div>

        <div class="mt-24 mb-24 separator"></div>

        <div class="bold">Accueil de voyageurs</div>
        <div>Devenir hôte</div>
        <div>AirCover pour les hôtes</div>
        <div>Ressources pour les hôtes</div>
        <div>Forum de la communauté</div>
        <div>Accueillir de manière responsable</div>

        <div class="mt-24 mb-24 separator"></div>

        <div class="bold">Airbnb</div>
        <div>Newsroom</div>
        <div>En savoir plus sur les nouveautés</div>
        <div>Lettre de nos fondateurs</div>
        <div>Carrières</div>
        <div>Investisseurs</div>
        <div>Cartes cadeaux</div>
      </div>

      <div class="mt-24 mb-24 separator"></div>

      <div class="row mb-16">
        <img class="mr-8" src="@/assets/icons/language.svg" />
        <div class="bold mr-32">Français (FR)</div>
        <div class="bold">€ EUR</div>
      </div>

      <div>© 2022 Airbnb, Inc.</div>
      <div>
        Confidentialité · Conditions générales · Plan du site · Fonctionnement
        du site · Infos sur l’entreprise
      </div>
    </div>

    <div class="price row items-center justify-between">
      <div>
        <div class="row">
          <div class="title mr-4">172 €</div>
          <div class="subtitle">par nuit</div>
        </div>
        <div class="subtitle underline">19-25 nov.</div>
      </div>

      <bnb-button label="Réserver" bg-color="gradient" />
    </div>
  </div>
</template>

<style lang="scss">
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

  .separator {
    width: 100%;
    background-color: #ddd;
    height: 1px;
  }

  .bed-picture {
    width: 180px;
    height: 120px;
  }

  .profile-picture {
    width: 48px;
    height: 48px;
    border-radius: 30px;
  }

  .photo {
    .cover-image {
      position: static;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }

    .top-link {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      z-index: 1;
    }

    .counter-image {
      color: white;
      position: absolute;
      bottom: 20px;
      right: 16px;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 30px;
      padding: 4px 10px;
    }
  }

  .content {
    padding: 24px;
  }
}
</style>
