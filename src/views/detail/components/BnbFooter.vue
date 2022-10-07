<template>
  <div>
    <div class="column gap-12">
      <div class="bold">Assistance</div>
      <div class="row justify-between gap-12 wrap">
        <div class="col col-md-3">Centre d’aide</div>
        <div class="col col-md-3">AirCover</div>
        <div class="col col-md-3">Informations de sécurité</div>
        <div class="col col-md-3">
          Soutenir les personnes en situation de handicap
        </div>
        <div class="col col-md-3">Options d'annulation</div>
        <div class="col col-md-3">Nos mesures face au Covid-19</div>
        <div class="col col-md-3">Signaler un problème de voisinage</div>
      </div>

      <div class="mt-24 mb-24 separator"></div>

      <div class="bold">Communauté</div>
      <div class="row justify-between gap-12 wrap">
        <div class="col col-md-3">Airbnb.org : réponse aux catastrophes</div>
        <div class="col col-md-3">Soutenir les réfugiés afghans</div>
        <div class="col col-md-3">Lutte contre la discramation</div>
      </div>

      <div class="mt-24 mb-24 separator"></div>

      <div class="bold">Accueil de voyageurs</div>
      <div class="row justify-between gap-12 wrap">
        <div class="col col-md-3">Devenir hôte</div>
        <div class="col col-md-3">AirCover pour les hôtes</div>
        <div class="col col-md-3">Ressources pour les hôtes</div>
        <div class="col col-md-3">Forum de la communauté</div>
        <div class="col col-md-3">Accueillir de manière responsable</div>
        <div class="col col-md-3"></div>
      </div>

      <div class="mt-24 mb-24 separator"></div>

      <div class="bold">Airbnb</div>
      <div class="row justify-between gap-12 wrap">
        <div class="col col-md-3">Newsroom</div>
        <div class="col col-md-3">En savoir plus sur les nouveautés</div>
        <div class="col col-md-3">Lettre de nos fondateurs</div>
        <div class="col col-md-3">Carrières</div>
        <div class="col col-md-3">Investisseurs</div>
        <div class="col col-md-3">Cartes cadeaux</div>
      </div>
    </div>

    <div class="mt-24 mb-24 separator"></div>

    <div class="end row mb-16">
      <img class="mr-8" src="@/assets/icons/language.svg" />
      <div class="bold mr-32">Français (FR)</div>
      <div class="bold">€ EUR</div>

      <div class="gt-sm" style="margin-left: 52px">
        <img class="mr-24" src="@/assets/icons/facebook.svg" />
        <img class="mr-24" src="@/assets/icons/twitter.svg" />
        <img src="@/assets/icons/instagram.svg" />
      </div>
    </div>

    <div class="end">© 2022 Airbnb, Inc.</div>
    <div>
      Confidentialité · Conditions générales · Plan du site · Fonctionnement du
      site · Infos sur l’entreprise
    </div>
  </div>
</template>
<style lang="scss" scoped>
.end {
  @media (min-width: $breakpoint-md-min) {
    display: flex;
    justify-content: center;
  }
}
</style>
