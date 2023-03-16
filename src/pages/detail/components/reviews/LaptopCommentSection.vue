<script lang="ts" setup>
import { getTotalScore, type Home } from "@/models/Home";
import { usePopup } from "@/stores/popup";

import CommentGrades from "./CommentGrades.vue";
import LaptopComment from "./LaptopComment.vue";

const props = defineProps<{ home: Home }>();

const { openPopup, setProps } = usePopup();
setProps(props.home);
</script>

<template>
  <div>
    <div class="row items-center gap-8 mb-4">
      <img src="/icons/star.svg" width="16" />
      <h2>
        {{ getTotalScore(home.reviews).toFixed(2) }} ·
        {{ home.reviews.length }} commentaires
      </h2>
    </div>

    <div class="row items-center gap-4 text-dark-grey subtitle mb-32">
      <div>Découvrez comment fonctionnent les commentaires</div>
      <img src="/icons/info.svg" />
    </div>

    <comment-grades :home="home" />

    <div class="row items-center justify-between wrap">
      <laptop-comment
        class="col-xl-6 mb-40"
        v-for="review in home.reviews"
        :key="review.author.firstName"
        :review="review"
      />
    </div>

    <bnb-button
      class="review-btn"
      :label="`Afficher les ${home.reviews.length} commentaires`"
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
