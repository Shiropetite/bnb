<template>
  <div class="laptop-photos">
    <div class="container">
      <div class="box row items-center">
        <img
          class="image-1"
          src="https://a0.muscache.com/im/pictures/4d268e76-949f-4de7-a10b-b4b48ea3355d.jpg?im_w=1200"
        />
        <div class="small-image">
          <img
            class="image"
            src="https://a0.muscache.com/im/pictures/4f4e82b1-3270-4c5a-9628-83ab64ae8f58.jpg?im_w=720"
          />
          <img
            class="image image-bottom"
            src="https://a0.muscache.com/im/pictures/fe2a079c-e2b3-4832-b814-5295abf411ea.jpg?im_w=720"
          />
        </div>
        <div class="small-image">
          <img
            class="image image-top-left"
            src="https://a0.muscache.com/im/pictures/ca4e39b3-ab0f-4a0e-b10f-7297bd4db5da.jpg?im_w=720"
          />
          <img
            class="image image-bottom image-bottom-left"
            src="https://a0.muscache.com/im/pictures/75607a14-a5ce-474a-a316-15ecaed1fbe9.jpg?im_w=720"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.laptop-photos {
  padding: 24px 0px;
}

.container {
  position: relative;
  height: 0 !important;
  padding-top: 300px !important;
}

.box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 300px;
}

.image-1 {
  width: 50%;
  min-height: 300px;
  border-radius: 30px 0 0 30px;
}

.small-image {
  width: 25%;
  padding-left: 8px;
  min-height: 300px;
  height: 100%;
}

.image {
  width: 100%;
  height: 49% !important;
  object-fit: cover;
}

.image-top-left {
  border-radius: 0 30px 0 0;
}

.image-bottom-left {
  border-radius: 0 0 30px 0;
}
</style>
