<template>
  <div>
    <div class="footer gap-12">
      <div class="col col-xl-3">
        <div class="bold mb-16">Assistance</div>
        <div class="row justify-between gap-12 wrap">
          <div class="col col-md-3 col-xl-12">Centre d’aide</div>
          <div class="col col-md-3 col-xl-12">AirCover</div>
          <div class="col col-md-3 col-xl-12">Informations de sécurité</div>
          <div class="col col-md-3 col-xl-12">Soutenir les personnes en situation de handicap</div>
          <div class="col col-md-3 col-xl-12">Options d'annulation</div>
          <div class="col col-md-3 col-xl-12">Nos mesures face au Covid-19</div>
          <div class="col col-md-3 col-xl-12">Signaler un problème de voisinage</div>
        </div>
      </div>

      <div class="mt-24 mb-24 separator lt-xl"></div>

      <div class="col col-xl-3">
        <div class="bold mb-16">Communauté</div>
        <div class="row justify-between gap-12 wrap">
          <div class="col col-md-3 col-xl-12">Airbnb.org : réponse aux catastrophes</div>
          <div class="col col-md-3 col-xl-12">Soutenir les réfugiés afghans</div>
          <div class="col col-md-3 col-xl-12">Lutte contre la discramation</div>
        </div>
      </div>

      <div class="mt-24 mb-24 separator lt-xl"></div>

      <div class="col col-xl-3">
        <div class="bold mb-16">Accueil de voyageurs</div>
        <div class="row justify-between gap-12 wrap">
          <div class="col col-md-3 col-xl-12">Devenir hôte</div>
          <div class="col col-md-3 col-xl-12">AirCover pour les hôtes</div>
          <div class="col col-md-3 col-xl-12">Ressources pour les hôtes</div>
          <div class="col col-md-3 col-xl-12">Forum de la communauté</div>
          <div class="col col-md-3 col-xl-12">Accueillir de manière responsable</div>
          <div class="col col-md-3 col-xl-12"></div>
        </div>
      </div>

      <div class="mt-24 mb-24 separator lt-xl"></div>

      <div class="col col-xl-3">
        <div class="bold mb-16">Airbnb</div>
        <div class="row justify-between gap-12 wrap">
          <div class="col col-md-3 col-xl-12">Newsroom</div>
          <div class="col col-md-3 col-xl-12">En savoir plus sur les nouveautés</div>
          <div class="col col-md-3 col-xl-12">Lettre de nos fondateurs</div>
          <div class="col col-md-3 col-xl-12">Carrières</div>
          <div class="col col-md-3 col-xl-12">Investisseurs</div>
          <div class="col col-md-3 col-xl-12">Cartes cadeaux</div>
        </div>
      </div>
    </div>

    <div class="mt-24 mb-24 separator"></div>

    <div class="col row items-center justify-between end">
      <div class="xl">
        <div>© 2022 Airbnb, Inc.</div>
        <div>
          Confidentialité · Conditions générales · Plan du site · Fonctionnement du site · Infos sur l’entreprise
        </div>
      </div>

      <div class="row mb-16">
        <img class="mr-8" src="src/assets/icons/language.svg" />
        <div class="bold mr-32">Français (FR)</div>
        <div class="bold">€ EUR</div>

        <div class="gt-sm" style="margin-left: 52px">
          <img class="mr-24" src="src/assets/icons/facebook.svg" />
          <img class="mr-24" src="src/assets/icons/twitter.svg" />
          <img src="src/assets/icons/instagram.svg" />
        </div>
      </div>
    </div>

    <div class="end lt-xl">© 2022 Airbnb, Inc.</div>
    <div class="lt-xl">
      Confidentialité · Conditions générales · Plan du site · Fonctionnement du site · Infos sur l’entreprise
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;

  @media (min-width: $breakpoint-xl-min) {
    flex-direction: row;
    flex-wrap: wrap;
  }
}

.end {
  @media (min-width: $breakpoint-md-min) and (max-width: $breakpoint-lg-max) {
    display: flex;
    justify-content: center;
  }
}
</style>
