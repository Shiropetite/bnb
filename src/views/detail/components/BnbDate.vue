<template>
  <div>
    <h2 class="mb-8">6 nuit à Badachro</h2>
    <div class="subtitle text-dark-grey mb-24">9 janv. 2023 - 14 janv. 2023</div>
    <div class="row justify-between">
      <bnb-calendar class="col col-xl-6" :month="0" :year="2023" start-date="09-01-2023"  end-date="15-01-2023" />
      <bnb-calendar class="col col-xl-6 gt-lg" :month="1" :year="2023" />
    </div>
    <div class="caption underline bold">Effacer les dates</div>
  </div>
</template>