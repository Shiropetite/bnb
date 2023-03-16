<script lang="ts" setup>
import type { Home } from "@/models/Home";

defineProps<{ home: Home }>();
</script>

<template>
  <div>
    <div class="lt-md row items-center justify-between mb-24">
      <div>
        <h2 class="mb-8">Proposé par {{ home.owner.firstName }}</h2>
        <div class="subtitle text-dark-grey">
          Membre depuis mars {{ home.owner.createdAt.getFullYear() }}
        </div>
        <div class="subtitle text-dark-grey">Particulier</div>
      </div>

      <img class="profile-picture" :src="home.owner.profilePicture" />
    </div>

    <div class="gt-sm row items-center mb-24">
      <img class="profile-picture mr-16" :src="home.owner.profilePicture" />

      <div>
        <h2 class="mb-2">Proposé par {{ home.owner.firstName }}</h2>
        <div class="subtitle text-dark-grey">
          Membre depuis mars {{ home.owner.createdAt.getFullYear() }} ·
          {{ home.owner.isProfessional ? "Professionel" : "Particulier" }}
        </div>
      </div>
    </div>

    <div class="row wrap" style="gap: 0 60px">
      <div class="col col-md-6">
        <div class="row items-center mb-16">
          <div class="mr-8 row items-center">
            <img src="/icons/star.svg" style="width: 16px; height: 16px" />
          </div>
          <div>{{ home.owner.reviews.length }} commentaires</div>
        </div>

        <div v-if="home.owner.identityVerified" class="row items-center mb-24">
          <div class="mr-8 row items-center">
            <img
              src="/icons/identity-verified.svg"
              style="width: 16px; height: 16px"
            />
          </div>
          <div>Identité vérifiée</div>
        </div>

        <div class="mb-24">
          {{ home.owner.description }}
        </div>

        <div>
          <div class="bold mb-8">Pendant votre séjour</div>

          <div class="mb-24">
            {{ home.ownerDescription }}
            <!-- <div class="bold underline">lire la suite</div> -->
          </div>
        </div>
      </div>

      <div class="col col-md-6">
        <div class="mb-8">Langue : {{ home.owner.languages.join(", ") }}</div>

        <div class="mb-8">
          Taux de réponse : {{ home.owner.responseRate * 100 }}%
        </div>

        <div class="mb-24">
          Délai de réponse : Dans la {{ home.owner.responseTime }}
        </div>

        <bnb-button
          class="mb-24 contact-btn"
          label="Contacter l’hôte"
          border="dark"
        />

        <div class="row items-center">
          <div class="gt-sm mr-16">
            <img src="/icons/bnb-warning.svg" />
          </div>
          <div class="caption mr-16">
            Pour protéger votre paiement, ne transférez jamais d'argent et ne
            communiquez pas en dehors du site ou de l'application Airbnb.
          </div>
          <div class="lt-md"><img src="/icons/bnb-warning.svg" /></div>
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
