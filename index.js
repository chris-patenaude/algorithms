let testGroups3 = [1, 2, 3, 4, 5, 6, 7, 8];

// Another idea is using a matrix to just track and

function main(groups, days) {
  // a list of days attendance for the event consisting of
  // a lower bound (the index of the first group to attend
  // that day), an upper bound (index of the last group to
  // attend), and a sum which is the total number of people
  // attending the event for the day.

  let [attendence, totalAttendence, spread] = setup(groups, days);
  let minSpread = spread;

  // Normilize O( log(G) )
  // Find the attendance distribution the minimizes the diffrence
  // the day with the highest attendance and the day with the lowest
}

function setup(groups, days) {
  // Setup O(n)
  // sets up the initial attendance for the days specified
  let attendence = new Array(days);
  let totalAttendence = 0;
  let low = 9999;
  let high = 0;
  for (let day = 0; day < days - 1; day++) {
    attendence[day] = {
      lowerBound: day,
      upperBound: day,
      sum: groups[day],
    };
    low = Math.min(low, groups[day]);
    high = Math.max(high, groups[day]);
    totalAttendence += groups[day];
  }

  let lowerBound = days - 1;
  let upperBound = groups.length - 1;
  let sum = sumSubArray(groups, lowerBound, upperBound);
  attendence[lowerBound] = { lowerBound, upperBound, sum };
  totalAttendence += sum;
  low = Math.min(low, sum);
  high = Math.max(high, sum);
  let spread = high - low;
  console.log(
    "Attendence:",
    attendence,
    "\nTotal Attendence:",
    totalAttendence,
    "\nSpread:",
    spread
  );
  return [attendence, totalAttendence, spread];
}

function sumSubArray(array, lowerBound, upperBound) {
  if (lowerBound > upperBound) return 0;
  return array[lowerBound] + sumSubArray(array, lowerBound + 1, upperBound);
}

main(testGroups3, 3);
