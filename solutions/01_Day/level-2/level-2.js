const WEEKEND = {
  saturday: "Saturday",
  sunday: "Sunday",
};
const WORKING_DAYS = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
};

const dayInput = prompt("What is the day today?");
const day = dayInput.toLowerCase();
if (WEEKEND[day]) console.log(`${WEEKEND[day]} is a weekend.`);
else if (WORKING_DAYS[day])
  console.log(`${WORKING_DAYS[day]} is a working day.`);
else console.log(`${day} not recognized.`);
