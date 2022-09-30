<template>
  <div class="review">
    <div class="row items-center mb-12">
      <img
        class="mr-12 profile-picture"
        src="https://a0.muscache.com/im/users/23650476/profile_pic/1415797588/original.jpg?im_w=240"
      />
      <div>
        <div class="bold">Constance</div>
        <div class="subtitle text-dark+grey">août 2018</div>
      </div>
    </div>

    <div class="mb-8">
      Experience unique et super. le logement de Ian se situe sur une île
      privée, au milieu de la nature et bénéficie de tout le confort nécessaire
      (cuisine complète, salle de bains etc.)...
    </div>

    <div class="row items-center">
      <div class="subtitle bold underline mr-4">En savoir plus</div>
      <img
        src="@/assets/icons/arrow-right.svg"
        style="height: 12px; width: 12px"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.review {
  width: 80%;
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 16px;

  .profile-picture {
    border-radius: 50%;
    width: 48px;
    height: 48px;
  }
}
</style>
