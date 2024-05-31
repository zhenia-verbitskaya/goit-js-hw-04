function calcAverageCalories(days) {
  let totalCalories = 0;
  let totalDays = 0;

  for (const day of days) {
    totalCalories += day.calories;
    totalDays += 1;
  }

  if (totalDays !== 0) {
    return totalCalories / totalDays;
  } else {
    return 0;
  }
}

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
);

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
);

console.log(
  calcAverageCalories([])
);
