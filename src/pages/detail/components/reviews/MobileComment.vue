<script lang="ts" setup>
import type { Review } from "@/models/Review";

defineProps<{
  review: Review;
}>();
</script>

<template>
  <div class="comment-list">
    <div class="row items-center mb-12">
      <img class="mr-12 profile-picture" :src="review.author.profilePicture" />
      <div>
        <div class="bold">{{ review.author.firstName }}</div>
        <div class="subtitle text-dark+grey">{{ review.createdAt }}</div>
      </div>
    </div>

    <div class="mb-8 text">{{ review.message }}</div>

    <bnb-link
      v-if="review.message.length > 200"
      class="bold"
      label="En savoir plus"
      outlined
      arrow
    />
  </div>
</template>
<style lang="scss" scoped>
.comment-list {
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 16px;
  flex: 1 0 80%;

  .profile-picture {
    border-radius: 50%;
    width: 48px;
    height: 48px;
  }

  .text {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
}
</style>
