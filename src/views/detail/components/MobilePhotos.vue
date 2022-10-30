<template>
  <div>
    <div class="top-link">
      <bnb-button icon="@/assets/icons/arrow-left.svg" shadow round />
      <div class="row">
        <bnb-button class="mr-16" icon="@/assets/icons/mobile-share.svg" shadow round />
        <bnb-button icon="@/assets/icons/mobile-save.svg" shadow round />
      </div>
    </div>

    <div style="position: relative">
      <img
        class="cover-image"
        src="https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=1200"
      />

      <div class="counter-image caption bold">1 / 19</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.cover-image {
  position: static;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  max-height: 80%;
}

.top-link {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  z-index: 1;
}

.counter-image {
  color: white;
  position: absolute;
  bottom: 20px;
  right: 16px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 30px;
  padding: 4px 10px;
}
</style>
