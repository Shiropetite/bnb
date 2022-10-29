<template>
  <div>
    <div class="lt-md row items-center justify-between mb-24">
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

    <div class="gt-sm row items-center mb-24">
      <img
        class="profile-picture mr-16"
        src="https://a0.muscache.com/im/users/33563060/profile_pic/1438769657/original.jpg?im_w=240"
      />

      <div>
        <h2 class="mb-2">Proposé par Ian</h2>
        <div class="subtitle text-dark-grey">Membre depuis mai 2015 · Professionnel</div>
      </div>
    </div>

    <div class="row wrap" style="gap: 0 60px">
      <div class="col col-md-6">
        <div class="row items-center mb-16">
          <div class="mr-8 row items-center">
            <img src="@/assets/icons/star.svg" style="width: 16px; height: 16px" />
          </div>
          <div>376 commentaires</div>
        </div>

        <div class="row items-center mb-24">
          <div class="mr-8 row items-center">
            <img src="@/assets/icons/identity-verified.svg" style="width: 16px; height: 16px" />
          </div>
          <div>Identité vérifiée</div>
        </div>

        <div class="mb-24">
          pêcheur de Gairloch , local à Badachro.<br />
          La famille vit sur Dry Island depuis des centaines d'années.
          <br />
          <br />
          Je suis joyeux, compétent et j'ai un bon sens de l'humour
        </div>

        <div>
          <div class="bold mb-8">Pendant votre séjour</div>

          <div class="mb-24">
            Vous vous sentirez à l'aise à l'extrémité nord de l'île, à l'abri de toute perturbation de notre part ou de
            la part des voyageurs séjournant dans l'autre propriété. Avec un arrang…
            <div class="bold underline">lire la suite</div>
          </div>
        </div>
      </div>

      <div class="col col-md-6">
        <div class="mb-8">Langue : English</div>

        <div class="mb-8">Taux de réponse : 64%</div>

        <div class="mb-24">Délai de réponse : Dans la journée</div>

        <bnb-button class="mb-24 contact-btn" label="Contacter l’hôte" border="dark" />

        <div class="row items-center">
          <div class="gt-sm mr-16">
            <img src="@/assets/icons/bnb-warning.svg" />
          </div>
          <div class="caption mr-16">
            Pour protéger votre paiement, ne transférez jamais d'argent et ne communiquez pas en dehors du site ou de
            l'application Airbnb.
          </div>
          <div class="lt-md"><img src="@/assets/icons/bnb-warning.svg" /></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.contact-btn {
  @media (max-width: $breakpoint-sm-max) {
    width: 100%;
  }
}
</style>
