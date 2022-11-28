<template>
  <div class="bnb-header">
    <div class="row justify-between" style="max-width: 1120px; width: 100%">
      <div class="row items-center">
        <img class="mr-24 lt-lg" src="/small-logo.svg" />
        <img class="mr-24 gt-md" src="/logo.svg" />

        <div class="search subtitle bold lt-lg">
          <div>Commencer votre recherche</div>
          <bnb-button icon="/icons/search.svg" bg-color="primary" round />
        </div>
      </div>

      <div class="search subtitle bold gt-md">
        <div>Commencer votre recherche</div>
        <bnb-button icon="/icons/search.svg" bg-color="primary" round />
      </div>

      <div class="row items-center">
        <bnb-button label="Devenez hôte" rounded />
        <bnb-button class="mr-8" icon="/icons/language.svg" round />
        <bnb-dropdown-button
          icon-left="/icons/menu.svg"
          icon-right="/icons/account.svg"
          border="light"
          size="sm"
          rounded
          shadow
          dense
        >
        <bnb-account-menu />
      </bnb-dropdown-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bnb-header {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
  border-bottom: solid 2px $light-grey;

  @media (min-width: $breakpoint-lg-min) {
    padding: 0 80px;
  }

  .search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    border: solid 1px $light-grey;
    border-radius: 30px;
    padding: 8px 8px 8px 24px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 4px 12px rgba(0, 0, 0, 0.05);
  }
}
</style>
