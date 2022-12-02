const maxDayInWeek = 7;

const monthName = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

export const getMonthName = (month: number): string => monthName[month];

const getNumberOfDayInMonth = (month: number, year: number): number => {
  const numberOfDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 1 && year % 4 === 0) {
    return numberOfDay[month] + 1;
  }

  return numberOfDay[month];
};

export const useDatePicker = (
  month: number,
  year: number,
  startDate?: string,
  endDate?: string
) => {
  const firstDay = new Date(year, month, 1);
  const nbDayInMonth = getNumberOfDayInMonth(month, year);
  const firstDayOfMonth =
    firstDay.getDay() === 0 ? maxDayInWeek - 1 : firstDay.getDay() - 1;
  const nbWeeks =
    Math.round((firstDayOfMonth + nbDayInMonth) / maxDayInWeek) + 1;
  let startingDate: Date | null = null;
  let endingDate: Date | null = null;

  if (startDate) {
    startingDate = new Date(
      Number.parseInt(startDate.split("-")[2]),
      Number.parseInt(startDate.split("-")[1]) - 1,
      Number.parseInt(startDate.split("-")[0])
    );
  }
  if (endDate) {
    endingDate = new Date(
      Number.parseInt(endDate.split("-")[2]),
      Number.parseInt(endDate.split("-")[1]) - 1,
      Number.parseInt(endDate.split("-")[0])
    );
  }

  const isDayValid = (day: number): boolean => {
    return day > 0 && day <= nbDayInMonth;
  };

  const dayNumber = (weekIndex: number, dayIndex: number): number => {
    return weekIndex * maxDayInWeek + (dayIndex + 1) - firstDayOfMonth;
  };

  const isSelectedDate = (weekIndex: number, dayIndex: number): boolean => {
    return (
      (!!startingDate &&
        startingDate.getDate() === dayNumber(weekIndex, dayIndex)) ||
      (!!endingDate && endingDate.getDate() === dayNumber(weekIndex, dayIndex))
    );
  };

  const isStartDate = (weekIndex: number, dayIndex: number): boolean => {
    if (!startingDate) return false;
    return (
      startingDate.getDate() === dayNumber(weekIndex, dayIndex) &&
      endingDate !== null
    );
  };

  const isRangeDate = (weekIndex: number, dayIndex: number): boolean => {
    if (!startingDate || !endingDate) return false;
    return (
      startingDate.getDate() < dayNumber(weekIndex, dayIndex) &&
      endingDate.getDate() > dayNumber(weekIndex, dayIndex)
    );
  };

  const isEndDate = (weekIndex: number, dayIndex: number): boolean => {
    if (!endingDate) return false;
    return endingDate.getDate() === dayNumber(weekIndex, dayIndex);
  };

  return {
    nbWeeks,
    firstDayOfMonth,
    dayNumber,
    isDayValid,
    isSelectedDate,
    isStartDate,
    isRangeDate,
    isEndDate,
  };
};
