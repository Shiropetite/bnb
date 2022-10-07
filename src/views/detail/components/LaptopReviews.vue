<template>
  <div>
    <div class="row items-center gap-8 mb-4">
      <img src="src/assets/icons/star.svg" width="16" />
      <h2>4,72 · 43 commentaires</h2>
    </div>

    <div class="row items-center gap-4 text-dark-grey subtitle mb-32">
      <div>Découvrez comment fonctionnent les commentaires</div>
      <img src="src/assets/icons/info.svg" />
    </div>

    <div class="row mb-32">
      <div class="col-6" style="margin-right: 70px">
        <div class="row justify-between mb-16">
          <div>Propreté</div>
          <div class="row items-center">
            <span class="grade" :style="`width: ${(4.6 * 102) / 5}px;`" />
            <span class="back" />
            <div class="caption bold">4,6</div>
          </div>
        </div>

        <div class="row justify-between mb-16">
          <div>Communication</div>
          <div class="row items-center">
            <span class="grade" :style="`width: ${(4.7 * 102) / 5}px;`" />
            <span class="back" />
            <div class="caption bold">4,7</div>
          </div>
        </div>

        <div class="row justify-between">
          <div>Arrivée</div>
          <div class="row items-center">
            <span class="grade" :style="`width: ${(4.7 * 102) / 5}px;`" />
            <span class="back" />
            <div class="caption bold">4,7</div>
          </div>
        </div>
      </div>

      <div class="col-6">
        <div class="row justify-between mb-16">
          <div>Précision</div>
          <div class="row items-center">
            <span class="grade" :style="`width: ${(4.8 * 102) / 5}px;`" />
            <span class="back" />
            <div class="caption bold">4,8</div>
          </div>
        </div>

        <div class="row justify-between mb-16">
          <div>Emplacement</div>
          <div class="row items-center">
            <span class="grade" :style="`width: ${(5 * 102) / 5}px;`" />
            <span class="back" />
            <div class="caption bold">5,0</div>
          </div>
        </div>

        <div class="row justify-between">
          <div>Qualité-prix</div>
          <div class="row items-center">
            <span class="grade" :style="`width: ${(4.5 * 102) / 5}px;`" />
            <span class="back" />
            <div class="caption bold">4,5</div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-40">
      <div class="row items-center mb-12">
        <img
          class="mr-12 profile-picture"
          src="https://a0.muscache.com/im/users/23650476/profile_pic/1415797588/original.jpg?im_w=240"
        />
        <div>
          <div class="bold">Constance</div>
          <div class="subtitle text-dark+grey">août 2018</div>
        </div>
      </div>

      <div class="mb-8 review">
        Experience unique et super. le logement de Ian se situe sur une île
        privée, au milieu de la nature et bénéficie de tout le confort
        nécessaire (cuisine complète, salle de bains etc.). tout est propre.
        hôte très agréable et réactif !!! Merci Ian pour votre réponse rapide à
        notre demande de dernière minute et pour votre amabilité, vos conseils
        et propositions. Enfin, superbe vue sur une belle rivière, au pied de la
        maison.
      </div>

      <div class="row items-center">
        <div class="subtitle bold underline mr-4">En savoir plus</div>
        <img
          src="@/assets/icons/arrow-right.svg"
          style="height: 12px; width: 12px"
        />
      </div>
    </div>

    <div class="mb-40">
      <div class="row items-center mb-12">
        <img
          class="mr-12 profile-picture"
          src="https://a0.muscache.com/im/pictures/user/e8c93460-721f-4223-a94d-13e453d44285.jpg?im_w=240"
        />
        <div>
          <div class="bold">Daniel</div>
          <div class="subtitle text-dark+grey">août 2022</div>
        </div>
      </div>

      <div class="mb-8 review">
        WOW what can I say? if your reading this even considering booking to go
        here? DO IT - The Dry Island is located in the most beautiful part of
        the whole of the UK, me and my Girlfriend drove up from the Midlands
        England we had a choice of going the faster route (via A9) or the more
        scenic drive via the A82 we went with the scenic route and im so glad we
        did as it meant we saw some amazing scenery and stopped a lot on the way
        up and that was before we even arrived at Dry Island and Otter Cabin,
        When we did arrive i was blown away by how amazing the island was in a
        beautiful little bay the bridge across to it i dont think i could ever
        get tired of walking across! Otter Cabin itself was perfect in a lovely
        secudled part of the island with beautiful views both from the decking
        and the Hot Tub! The hosts were great and very helpful with given us
        advice on where to go and what was open etc... Honestly the only thing I
        would say is I wish I booked longer! again if you are even considering
        booking this! Do It! We will certainly be going back
      </div>

      <div class="row items-center">
        <div class="subtitle bold underline mr-4">En savoir plus</div>
        <img
          src="@/assets/icons/arrow-right.svg"
          style="height: 12px; width: 12px"
        />
      </div>
    </div>

    <div class="mb-40">
      <div class="row items-center mb-12">
        <img
          class="mr-12 profile-picture"
          src="https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240"
        />
        <div>
          <div class="bold">Matthew</div>
          <div class="subtitle text-dark+grey">mars 2022</div>
        </div>
      </div>

      <div class="mb-8 review">
        Nice location, but not a great experience as the value for money is not
        there. Dated accommodation with not pleasant smell, not worth 150£ per
        night.
      </div>
    </div>

    <div class="mb-40">
      <div class="row items-center mb-12">
        <img
          class="mr-12 profile-picture"
          src="https://a0.muscache.com/im/pictures/user/32cdceb7-59ea-4406-a985-f05ad5af2738.jpg?im_w=240"
        />
        <div>
          <div class="bold">Mauro</div>
          <div class="subtitle text-dark+grey">juin 2022</div>
        </div>
      </div>

      <div class="mb-8 review">
        This is an incredibly tranquil and idyllic place to visit. It’s only an
        hour and a half by road from Inverness, thorough the stunning Highlands.
        Using the Caledonian Sleeper makes for a wonderful break from the South
      </div>
    </div>

    <div class="mb-40">
      <div class="row items-center mb-12">
        <img
          class="mr-12 profile-picture"
          src="https://a0.muscache.com/im/pictures/user/6290d86c-3201-45c3-b057-b9e15b2bd91b.jpg?im_w=240"
        />
        <div>
          <div class="bold">Laura</div>
          <div class="subtitle text-dark+grey">février 2022</div>
        </div>
      </div>

      <div class="mb-8 review">
        Great wee place if you are looking to get away from it all. We were
        lucky enough to see a few seals playing in the water and a wee otter
        spending his morning catching his breakfast and coming on to the rocks
        to eat. If you are into wildlife then this is the perfect place. Our wee
        dogs had a great time too 😊
      </div>

      <div class="row items-center">
        <div class="subtitle bold underline mr-4">En savoir plus</div>
        <img
          src="@/assets/icons/arrow-right.svg"
          style="height: 12px; width: 12px"
        />
      </div>
    </div>

    <div class="mb-40">
      <div class="row items-center mb-12">
        <img
          class="mr-12 profile-picture"
          src="https://a0.muscache.com/im/pictures/user/b18aa73a-9bb9-47cf-b86b-96d997010deb.jpg?im_w=240"
        />
        <div>
          <div class="bold">Rob</div>
          <div class="subtitle text-dark+grey">décembre 2021</div>
        </div>
      </div>

      <div class="mb-8 review">
        a truly stunning wee get away. we couldn't of loved our time on dry island more than we did
      </div>

    </div>

    <bnb-button
      class="review-btn"
      label="Afficher les 43 commentaires"
      border="dark"
    />
  </div>
</template>
<style lang="scss" scoped>
.grade {
  background-color: $dark;
  height: 4px;
  position: absolute;
}

.back {
  width: 102px;
  height: 4px;
  background-color: $light-grey;
  margin-right: 8px;
}

.review {
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

</style>
