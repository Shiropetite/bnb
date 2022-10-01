<template>
  <div class="bnb-header">
    <div class="row items-center">
      <img class="mr-24" src="@/assets/small-logo.svg" />
      <div class="search subtitle bold">
        <div>Commencer votre recherche</div>
        <bnb-button
          icon="src/assets/icons/search.svg"
          bg-color="primary"
          round
        />
      </div>
    </div>

    <div class="row items-center">
      <bnb-button label="Devenez hôte" rounded />
      <bnb-button class="mr-8" icon="src/assets/icons/language.svg" round />
      <bnb-button
        icon-left="src/assets/icons/menu.svg"
        icon-right="src/assets/icons/account.svg"
        border="light"
        size="sm"
        rounded
        shadow
        dense
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bnb-header {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  border-bottom: solid 2px $light-grey;

  .search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    border: solid 1px $light-grey;
    border-radius: 30px;
    padding: 8px 8px 8px 24px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 4px 12px rgba(0, 0, 0, 0.05);
  }
}
</style>
