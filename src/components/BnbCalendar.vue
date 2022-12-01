<script lang="ts" setup>
import { useDatePicker, getMonthName } from "@/utils/date";

const props = defineProps<{
  startDate?: string;
  endDate?: string;
  month: number;
  year: number;
}>();

const {
  nbWeeks,
  dayNumber,
  isDayValid,
  isSelectedDate,
  isStartDate,
  isRangeDate,
  isEndDate,
} = useDatePicker(props.month, props.year, props.startDate, props.endDate);
</script>
<template>
  <div class="bnb-calendar">
    <div class="row items-center justify-between mb-16">
      <bnb-button icon="/icons/arrow-left.svg" round />
      <div class="bold">{{ getMonthName(month) }} {{ year }}</div>
      <bnb-button icon="/icons/arrow-right.svg" round />
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
      <tr v-for="(_, weekIndex) in nbWeeks" :key="weekIndex">
        <td v-for="(_, dayIndex) in 7" :key="dayIndex">
          <button
            class="date"
            :class="{
              available: isDayValid(dayNumber(weekIndex, dayIndex)),
              'start-date': isStartDate(weekIndex, dayIndex),
              'range-date': isRangeDate(weekIndex, dayIndex),
              'end-date': isEndDate(weekIndex, dayIndex),
              selected: isSelectedDate(weekIndex, dayIndex),
            }"
          >
            {{
              isDayValid(dayNumber(weekIndex, dayIndex))
                ? dayNumber(weekIndex, dayIndex)
                : ""
            }}
          </button>
        </td>
      </tr>
    </table>
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
    content: "";
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
    cursor: default;
  }

  .available:hover {
    border: solid 1px black;
    cursor: pointer;
  }

  .start-date {
    background-color: #222;
    color: white;
  }

  td:has(.start-date) {
    background-color: #ddd;
    border-radius: 50% 0 0 50%;
  }

  td:has(.range-date) {
    background-color: #ddd;
  }

  .end-date {
    background-color: #222;
    color: white;
  }

  td:has(.end-date) {
    background-color: #ddd;
    border-radius: 0 50% 50% 0;
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
