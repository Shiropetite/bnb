<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useDialog } from "@/stores/dialog";

const { openDialog } = useDialog();

const isVisible = ref(false);
const isPrice = ref(false);

onMounted(() => {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
      isVisible.value = true;
      if (window.scrollY > 2400) {
        isPrice.value = true;
      } else {
        isPrice.value = false;
      }
    } else {
      isVisible.value = false;
    }
  });
});
</script>
<template>
  <div class="bnb-summary row justify-center items-center" v-if="isVisible">
    <div class="col box row justify-between">
      <div class="summary row items-center">
        <div>Photos</div>
        <div>Équipements</div>
        <div>Commentaires</div>
        <div>Emplacement</div>
      </div>
      <div v-if="isPrice" class="price row items-center">
        <div class="mr-16">
          <div class="row items-center gap-8 mb-2">
            <div class="title">172 €</div>
            <div class="subtitle">par nuit</div>
          </div>
          <div class="row items-center gap-4 caption">
            <img src="/icons/star.svg" />
            <div class="bold">4,71 ·</div>
            <bnb-link
              class="bold text-dark-grey"
              label="43 commentaires"
              @click="openDialog('comment-popup')"
              outlined
            />
          </div>
        </div>
        <bnb-button label="Réserver" bg-color="gradient" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bnb-summary {
  border-bottom: solid 1px $light-grey;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  height: 80px;
  padding: 0 40px;
  z-index: 2;

  @media (min-width: $breakpoint-lg-min) {
    padding: 0 80px;
  }

  .box {
    max-width: 1120px;
  }

  .summary {
    gap: 24px;
  }
}

.price {
  background-color: white;
  top: 0;
  right: 0;
  height: 80px;
}
</style>
