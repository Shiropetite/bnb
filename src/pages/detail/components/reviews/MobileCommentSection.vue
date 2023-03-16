<script lang="ts" setup>
import { getTotalScore, type Home } from "@/models/Home";
import { usePopup } from "@/stores/popup";

import MobileComment from "./MobileComment.vue";

const props = defineProps<{ home: Home }>();

const { openPopup, setProps } = usePopup();
setProps(props.home);
</script>

<template>
  <div>
    <div class="row items-center mb-32">
      <div class="mr-8 row items-center">
        <img src="/icons/star.svg" style="width: 16px; height: 16px" />
      </div>
      <h2>
        {{ getTotalScore(home.reviews) }} ·
        {{ home.reviews.length }} commentaires
      </h2>
    </div>

    <div class="mb-24">
      <div class="carousel">
        <div class="slide">
          <mobile-comment
            v-for="review in home.reviews"
            :key="review.author.firstName"
            :review="review"
          />
          <div class="end row items-center justify-center bold underline">
            <div>Afficher les {{ home.reviews.length }} commentaires</div>
          </div>
        </div>
      </div>
    </div>

    <bnb-button
      style="width: 100%"
      :label="`Afficher les ${home.reviews.length} commentaires`"
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
