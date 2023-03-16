<script lang="ts" setup>
import { getTotalScore } from "@/models/Home";
import { usePopup } from "@/stores/popup";

import CommentGrades from "./CommentGrades.vue";
import LaptopComment from "./LaptopComment.vue";

const store = usePopup();
</script>

<template>
  <div v-if="store.props">
    <div class="ma-12">
      <bnb-button
        class="gt-md"
        icon="/icons/close.svg"
        @click="store.toggle()"
        round
      />
      <bnb-button
        class="lt-lg"
        icon="/icons/arrow-left.svg"
        @click="store.toggle()"
        round
      />
    </div>

    <div class="popup-body row justify-between wrap">
      <div class="grade-section">
        <h2 class="mb-4">
          <img class="mr-8" src="/icons/star.svg" width="24" />
          <span>
            {{ getTotalScore(store.props.reviews) }} ·
            {{ store.props.reviews.length }} commentaires
          </span>
        </h2>

        <div class="text-dark-grey subtitle">
          <span class="mr-4"
            >Découvrez comment fonctionnent les commentaires</span
          >
          <img src="/icons/info.svg" />
        </div>

        <div class="search-container lt-lg mt-16">
          <div class="search-bar">
            <img src="/icons/thin-search.svg" width="16" />
            <input placeholder="Recherchez des commentaires" />
          </div>
        </div>

        <comment-grades class="mt-32 gt-md" :home="store.props" popup />
      </div>

      <div class="comment-section">
        <div class="search-container gt-md">
          <div class="search-bar">
            <img src="/icons/thin-search.svg" width="16" />
            <input placeholder="Recherchez des commentaires" />
          </div>
        </div>

        <div class="comment-list">
          <comment-grades class="lt-lg" :home="store.props" popup />

          <laptop-comment
            :class="{ 'mb-40': index < store.props.reviews.length - 1 }"
            v-for="(review, index) in store.props.reviews"
            :key="review.author.firstName"
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

  @media (max-width: $breakpoint-lg-min) {
    width: 100%;
    padding: 0 24px 16px 24px;
    margin: 0;
  }
}

.comment-section {
  width: 60%;
  overflow-y: scroll;
  max-height: calc(100vh - 134px);

  @media (max-width: $breakpoint-lg-min) {
    width: 100%;
  }
}

.comment-list {
  padding: 90px 24px 24px 24px;

  @media (max-width: $breakpoint-lg-min) {
    padding-top: 0px;
  }
}

.popup-body {
  overflow-y: hidden;
}

.search-container {
  background-color: white;
  padding: 24px;
  position: absolute;
  width: 580px;

  @media (max-width: $breakpoint-lg-min) {
    width: 100%;
    padding: 0;
    position: static;
  }
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
