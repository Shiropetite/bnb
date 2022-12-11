<script lang="ts" setup>
import { usePopup } from "@/stores/popup";

type Review = {
  profilePicture: string;
  name: string;
  date: string;
  comment: string;
};

defineProps<{
  review: Review;
  wholeReview?: boolean;
}>();

const { openPopup } = usePopup();
</script>

<template>
  <div class="col">
    <div class="row items-center mb-12">
      <img class="mr-12 profile-picture" :src="review.profilePicture" />
      <div>
        <div class="bold">{{ review.name }}</div>
        <div class="subtitle text-dark+grey">{{ review.date }}</div>
      </div>
    </div>

    <div class="mb-8" :class="{ review: wholeReview !== true }">
      {{ review.comment }}
    </div>

    <bnb-link
      v-if="review.comment.length > 200 && !wholeReview"
      class="bold"
      label="En savoir plus"
      @click="openPopup('comment-popup')"
      outlined
      arrow
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
