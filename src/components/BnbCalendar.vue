<script lang="ts" setup>
defineProps<{
  month: string;
  year: number;
}>();
</script>
<template>
  <div class="bnb-calendar">
    <div class="row items-center justify-between mb-16">
      <bnb-button icon="src/assets/icons/arrow-left.svg" round />
      <div class="bold">{{ month }} {{ year }}</div>
      <bnb-button icon="src/assets/icons/arrow-right.svg" round />
    </div>
    
    <table class="mb-8">
      <tr class="caption text-dark-grey bold">
        <th>Lun.</th>
        <th>Mar.</th>
        <th>Mer.</th>
        <th>Jeu.</th>
        <th>Ven.</th>
        <th>Sam.</th>
        <th>Dim.</th>
      </tr>
    </table>
    
    <table class="text-center subtitle bold mb-16">
      <tr>
        <td><div class="date"></div></td>
        <td><div class="date not-available">1</div></td>
        <td><div class="date not-available">2</div></td>
        <td><div class="date not-available">3</div></td>
        <td><div class="date not-available">4</div></td>
        <td><div class="date">5</div></td>
        <td><div class="date">6</div></td>
      </tr>
      <tr>
        <td><div class="date">7</div></td>
        <td><div class="date min">8</div></td>
        <td><div class="date min">9</div></td>
        <td><div class="date not-available">10</div></td>
        <td><div class="date not-available">11</div></td>
        <td><div class="date not-available">12</div></td>
        <td><div class="date not-available">13</div></td>
      </tr>
      <tr>
        <td><div class="date not-available">14</div></td>
        <td><div class="date not-available">15</div></td>
        <td><div class="date not-available">16</div></td>
        <td><div class="date not-available">17</div></td>
        <td><div class="date not-available">18</div></td>
        <td class="td-first"><div class="date selected">19</div></td>
        <td class="td-range"><div class="date range">20</div></td>
      </tr>
      <tr>
        <td class="td-range"><div class="date range">21</div></td>
        <td class="td-range"><div class="date range">22</div></td>
        <td class="td-range"><div class="date range">23</div></td>
        <td class="td-range"><div class="date range">24</div></td>
        <td class="td-last"><div class="date selected">25</div></td>
        <td><div class="date">26</div></td>
        <td><div class="date">27</div></td>
      </tr>
      <tr>
        <td><div class="date">28</div></td>
        <td><div class="date">29</div></td>
        <td><div class="date">30</div></td>
        <td><div class="date"></div></td>
        <td><div class="date"></div></td>
        <td><div class="date"></div></td>
        <td><div class="date"></div></td>
      </tr>
    </table>

    <div class="caption underline bold">Effacer les dates</div>
    
  </div>
</template>
<style lang="scss">
.bnb-calendar {

  table {
    width: 100%;
    border-spacing: 0px;
  }
  
  td {
    width: 14%;
    position: relative;
  }

  td:after {
    content: '';
    display: block;
    margin-top: 100%;
  }

  td .date {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .not-available {
    color: #ddd;
  }

  .min {
    color: #717171;
  }

  .selected {
    background-color: #222;
    color: white;
  }

  .td-range {
    background-color: #ddd;
    border-radius: 0px;
  }

  .td-first {
    background-color: #ddd;
    border-radius: 50% 0 0 50%;
  }

  .td-last {
    background-color: #ddd;
    border-radius: 0 50% 50% 0;
  }

  .range {
    background-color: #ddd;
    color: #717171;
  }
}
</style>
