<script lang="ts" setup>
import { usePopup } from "@/stores/popup";

import CommentGrades from "./CommentGrades.vue";
import LaptopComment from "./LaptopComment.vue";

const { openPopup } = usePopup();

// TODO: Update when mock of entire property
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
  {
    profilePicture:
      "https://a0.muscache.com/im/pictures/user/32cdceb7-59ea-4406-a985-f05ad5af2738.jpg?im_w=240",
    name: "Mauro",
    date: "juin 2022",
    comment:
      "This is an incredibly tranquil and idyllic place to visit. It’s only an hour and a half by road from Inverness, thorough the stunning Highlands. Using the Caledonian Sleeper makes for a wonderful break from the South",
  },
  {
    profilePicture:
      "https://a0.muscache.com/im/pictures/user/6290d86c-3201-45c3-b057-b9e15b2bd91b.jpg?im_w=240",
    name: "Laura",
    date: "février 2022",
    comment:
      "Great wee place if you are looking to get away from it all. We were lucky enough to see a few seals playing in the water and a wee otter spending his morning catching his breakfast and coming on to the rocks to eat. If you are into wildlife then this is the perfect place. Our wee dogs had a great time too 😊",
  },
  {
    profilePicture:
      "https://a0.muscache.com/im/pictures/user/b18aa73a-9bb9-47cf-b86b-96d997010deb.jpg?im_w=240",
    name: "Rob",
    date: "décembre 2021",
    comment:
      "a truly stunning wee get away. we couldn't of loved our time on dry island more than we did",
  },
];
</script>

<template>
  <div>
    <div class="row items-center gap-8 mb-4">
      <img src="/icons/star.svg" width="16" />
      <h2>4,72 · 43 commentaires</h2>
    </div>

    <div class="row items-center gap-4 text-dark-grey subtitle mb-32">
      <div>Découvrez comment fonctionnent les commentaires</div>
      <img src="/icons/info.svg" />
    </div>

    <comment-grades />

    <div class="row items-center justify-between wrap">
      <laptop-comment
        class="col-xl-6 mb-40"
        v-for="review in mockReviews"
        :key="review.name"
        :review="review"
      />
    </div>

    <bnb-button
      class="review-btn"
      label="Afficher les 43 commentaires"
      border="dark"
      @click="openPopup('comment-popup')"
    />
  </div>
</template>

<style lang="scss" scoped>
.review {
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
