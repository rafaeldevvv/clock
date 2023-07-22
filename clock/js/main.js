const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let hourDOM = document.querySelector("#hour"),
  minuteDOM = document.querySelector("#minute"),
  secondDOM = document.querySelector("#second"),
  indicationDOM = document.querySelector("#indication"),
  dateDOM = document.querySelector("#date");

function updateTime() {
  let date = new Date();
  let hour = date.getHours(),
    minute = date.getMinutes().toString().padStart(2, "0"),
    second = date.getSeconds().toString().padStart(2, "0"),
    indication = "am";
  let dayWeek = days[date.getDay()],
    month = months[date.getMonth()],
    dayMonth = date.getDate();

  if (hour > 12) {
    hour = (hour % 12).toString().padStart(2, "0");
    indication = "pm";
  }

  hourDOM.textContent = hour;
  minuteDOM.textContent = minute;
  secondDOM.textContent = second;
  indicationDOM.textContent = indication;
  dateDOM.textContent = `${dayWeek}, ${month} ${dayMonth}`;
}
updateTime();
setInterval(updateTime, 1000);

let separators = document.querySelectorAll(".separator");
window.addEventListener("resize", updateSemicolons);
function updateSemicolons() {
  for (let separator of Array.from(separators)) {
    separator.setAttribute("data-line", innerWidth > 900 ? "false" : "true");
  }
}
updateSemicolons();
