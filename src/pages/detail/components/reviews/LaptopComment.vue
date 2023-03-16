<script lang="ts" setup>
import type { Review } from "@/models/Review";
import { usePopup } from "@/stores/popup";

defineProps<{
  review: Review;
  wholeReview?: boolean;
}>();

const { openPopup } = usePopup();
</script>

<template>
  <div class="col">
    <div class="row items-center mb-12">
      <img class="mr-12 profile-picture" :src="review.author.profilePicture" />
      <div>
        <div class="bold">{{ review.author.firstName }}</div>
        <div class="subtitle text-dark+grey">{{ review.createdAt }}</div>
      </div>
    </div>

    <div class="mb-8" :class="{ review: wholeReview !== true }">
      {{ review.message }}
    </div>

    <bnb-link
      v-if="review.message.length > 200 && !wholeReview"
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
