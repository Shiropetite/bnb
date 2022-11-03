<template>
  <div>
    <div class="row items-center mb-32">
      <div class="mr-8 row items-center">
        <img src="src/assets/icons/star.svg" style="width: 16px; height: 16px" />
      </div>
      <h2>4,72 · 43 commentaires</h2>
    </div>

    <div class="mb-24">
      <div class="carousel">
        <div class="slide">
          <bnb-review class="bnb-review" />
          <bnb-review class="bnb-review" />
          <bnb-review class="bnb-review" />
          <div class="end row items-center justify-center bold underline">
            <div>Afficher les 44 commentaires</div>
          </div>
        </div>
      </div>
    </div>

    <bnb-button style="width: 100%" label="Afficher les 43 commentaires" border="dark" />
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

.bnb-review {
  flex: 1 0 80%;
}

.end {
  flex: 1 0 80%;
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 16px;
}
</style>
