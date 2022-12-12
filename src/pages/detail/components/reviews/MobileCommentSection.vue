<script lang="ts" setup>
import { usePopup } from "@/stores/popup";

import MobileComment from "./MobileComment.vue";

const mockReviews = [
  {
    profilePicture:
      "https://a0.muscache.com/im/users/23650476/profile_pic/1415797588/original.jpg?im_w=240",
    name: "Constance",
    date: "août 2018",
    comment:
      "Experience unique et super. le logement de Ian se situe sur une île privée, au milieu de la nature et bénéficie de tout le confort nécessaire (cuisine complète, salle de bains etc.). tout est propre. hôte très agréable et réactif !!! Merci Ian pour votre réponse rapide à notre  demande de dernière minute et pour votre amabilité, vos conseils et propositions. Enfin, superbe vue sur une belle rivière, au pied de la maison.",
  },
  {
    profilePicture:
      "https://a0.muscache.com/im/pictures/user/e8c93460-721f-4223-a94d-13e453d44285.jpg?im_w=240",
    name: "Daniel",
    date: "août 2022",
    comment:
      "WOW what can I say? if your reading this even considering booking to go here? DO IT - The Dry Island is located in the most beautiful part of the whole of the UK, me and my Girlfriend drove up from the Midlands England we had a choice of going the faster route (via A9) or the more scenic drive via the A82 we went with the scenic route and im so glad we did as it meant we saw some amazing scenery and stopped a lot on the way up and that was before we even arrived at Dry Island and Otter Cabin, When we did arrive i was blown away by how amazing the island was in a beautiful little bay the bridge across to it i dont think i could ever get tired of walking across! Otter Cabin itself was perfect in a lovely secudled part of the island with beautiful views both from the decking and the Hot Tub! The hosts were great and very helpful with given us advice on where to go and what was open etc... Honestly the only thing I would say is I wish I booked longer! again if you are even considering booking this! Do It! We will certainly be going back",
  },
  {
    profilePicture:
      "https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240",
    name: "Matthew",
    date: "mars 2022",
    comment:
      "Nice location, but not a great experience as the value for money is not there. Dated accommodation with not pleasant smell, not worth 150£ per night.",
  },
];

const { openPopup } = usePopup();
</script>

<template>
  <div>
    <div class="row items-center mb-32">
      <div class="mr-8 row items-center">
        <img src="/icons/star.svg" style="width: 16px; height: 16px" />
      </div>
      <h2>4,72 · 43 commentaires</h2>
    </div>

    <div class="mb-24">
      <div class="carousel">
        <div class="slide">
          <mobile-comment
            v-for="review in mockReviews"
            :key="review.name"
            :review="review"
          />
          <div class="end row items-center justify-center bold underline">
            <div>Afficher les 43 commentaires</div>
          </div>
        </div>
      </div>
    </div>

    <bnb-button
      style="width: 100%"
      label="Afficher les 43 commentaires"
      border="dark"
      @click="openPopup('comment-popup')"
    />
  </div>
</template>
<style lang="scss" scoped>
.carousel {
  position: relative;
  padding-top: 226px;
}

.slide {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  overflow: scroll;
  gap: 12px;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
}

.end {
  flex: 1 0 80%;
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 16px;
}
</style>
