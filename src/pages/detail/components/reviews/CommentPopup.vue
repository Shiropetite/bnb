<script lang="ts" setup>
import { useDialog } from "@/stores/dialog";

import CommentGrades from "./CommentGrades.vue";
import LaptopComment from "./LaptopComment.vue";

const store = useDialog();

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
    <div class="ma-12">
      <bnb-button
        class="gt-sm"
        icon="/icons/close.svg"
        @click="store.toggle()"
        round
      />
      <bnb-button
        class="lt-md"
        icon="/icons/arrow-left.svg"
        @click="store.toggle()"
        round
      />
    </div>
    <div class="dialog-body row justify-between">
      <div class="grade-section">
        <h2 class="mb-4">
          <img class="mr-8" src="/icons/star.svg" width="24" />
          <span>4,72 · 43 commentaires</span>
        </h2>

        <div class="text-dark-grey subtitle mb-32">
          <span class="mr-4"
            >Découvrez comment fonctionnent les commentaires</span
          >
          <img src="/icons/info.svg" />
        </div>

        <comment-grades />
      </div>

      <div class="comment-section">
        <div class="search-container">
          <div class="search-bar">
            <img src="/icons/thin-search.svg" width="16" />
            <input placeholder="Recherchez des commentaires" />
          </div>
        </div>

        <div class="comment-list">
          <laptop-comment
            :class="{ 'mb-40': index < mockReviews.length - 1 }"
            v-for="(review, index) in mockReviews"
            :key="review.name"
            :review="review"
            whole-review
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  font-size: 32px;
  font-weight: 900;
  line-height: 32px;
}

.grade-section {
  width: 30%;
  margin-right: 4%;
  padding: 24px;
  font-size: 14px;
}

.comment-section {
  width: 60%;
  overflow-y: scroll;
  max-height: calc(100vh - 134px);
}

.comment-list {
  padding: 90px 24px 24px 24px;
}

.dialog-body {
  overflow-y: hidden;
}

.search-container {
  background-color: white;
  padding: 24px;
  position: absolute;
  width: 580px;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 0 8px;
  cursor: text;
  color: $dark-grey;
  background-color: $almost-white;
  border-radius: 32px;
  padding: 12px 12px 12px 16px;
  box-shadow: rgb(176 176 176) 0px 0px 0px 1px;

  &:has(> input:focus) {
    box-shadow: rgb(34 34 34) 0px 0px 0px 2px;
  }
}

input {
  margin-right: 8px;
}
</style>
