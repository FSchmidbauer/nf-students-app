export default function drawDate() {
  let myDate = new Date();
  const dd = myDate.getDate();
  const mm = myDate.getMonth() + 1; //January is 0!
  const yyyy = myDate.getFullYear();
  const weekDay = myDate.getDay();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let today = "on " + weekDays[weekDay] + " - " + dd + "." + mm + "." + yyyy;

  return today;
}
