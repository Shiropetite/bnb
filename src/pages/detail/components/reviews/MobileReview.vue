<script lang="ts" setup>
type Review = {
  profilePicture: string;
  name: string;
  date: string;
  comment: string;
};

defineProps<{
  review: Review;
}>();
</script>

<template>
  <div class="review">
    <div class="row items-center mb-12">
      <img class="mr-12 profile-picture" :src="review.profilePicture" />
      <div>
        <div class="bold">{{ review.name }}</div>
        <div class="subtitle text-dark+grey">{{ review.date }}</div>
      </div>
    </div>

    <div class="mb-8 text">{{ review.comment }}</div>

    <bnb-link
      v-if="review.comment.length > 200"
      class="bold"
      label="En savoir plus"
      outlined
      arrow
    />
  </div>
</template>
<style lang="scss" scoped>
.review {
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 16px;

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
