<template>
  <div class="right-side">
    <div class="sticky">
      <div class="container">
        <div class="sidebar">
          <div class="row items-center gap-8 mb-2">
            <h2>172 €</h2>
            <div>par nuit</div>
          </div>
          <div class="row items-center gap-4 subtitle mb-24">
            <img src="@/assets/icons/star.svg" />
            <div>4,71 ·</div>
            <div class="bold underline text-dark-grey">43 commentaires</div>
          </div>

          <div class="tab caption mb-16">
            <div class="row">
              <div class="col-6 cell">
                <div class="bold mb-2">Arrivée</div>
                <div>19/11/20...</div>
              </div>
              <div class="col-6 cell cell-right">
                <div class="bold mb-2">Départ</div>
                <div>25/11/20...</div>
              </div>
            </div>
            <div class="cell cell-bottom">
              <div class="bold mb-2">Voyageurs</div>
              <div>1 voyageur</div>
            </div>
          </div>

          <bnb-button class="col mb-16" label="Réserver" bg-color="gradient" />

          <div class="subtitle text-center mb-24">Aucun montant ne vous sera débité pour le moment</div>

          <div class="row items-center justify-between mb-16">
            <div class="underline">172 x 6 nuits</div>
            <div>1 032 €</div>
          </div>

          <div class="row items-center justify-between">
            <div class="underline">Frais de service</div>
            <div>171 €</div>
          </div>

          <div class="separator mb-24 mt-24"></div>

          <div class="row items-center justify-between bold">
            <div>Total</div>
            <div>1 203 €</div>
          </div>
        </div>
        <div class="signal row items-center justify-center bold underline text-dark-grey">
          <img class="mr-16" src="@/assets/icons/signal.svg" />
          <div>Signaler cette annonce</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.right-side {
  position: relative;
  width: 33.33%;
  margin-left: 8.33%;
  min-width: 220px;
}

.sticky {
  position: -webkit-sticky !important;
  position: sticky !important;
  top: var(--navigation-bar-offset, 120px) !important;
  z-index: 1 !important;
  width: 100% !important;
  display: inline-block !important;
  padding-right: 1px !important;
}

.container {
  padding-bottom: 48px;
}

.sidebar {
  padding: 24px;
  border-radius: 12px;
  border: solid 1px $light-grey;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.12);
}

.signal {
  margin-top: 24px;

  img {
    filter: brightness(0) invert(0.4);
  }
}

.cell {
  padding: 12px;
}

.cell-bottom {
  border-top: solid 1px $grey;
}

.cell-right {
  border-left: solid 1px $grey;
}

.tab {
  border: solid 1px $grey;
  border-radius: 8px;
}
</style>
