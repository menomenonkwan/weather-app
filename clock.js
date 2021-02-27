const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const timeNow = document.querySelector('.time');
const dateNow = document.querySelector('.date');


// Get Current Time
function setTime() {
  const now = new Date();
  // let amPm ="";

  // seconds
  let seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  
  // minutes
  let minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  
  // hours
  let hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg`;

  let meridiem = hours >= 12 ? "PM" : "AM";

  // if(hours > 12) {hours -= 12;}
  if (hours === 0 ) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
  };

  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}

  timeNow.textContent = `${hours}: ${minutes}: ${seconds} ${meridiem}`;
}

setInterval(setTime, 1000);
setTime();


// Get Calendar Date Function
function setDate() {
const now = new Date();
  const options = { month: 'long'};
  const month = new Intl.DateTimeFormat('en-US', options).format(now);

const weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
let dayOfWeek = weekday[now.getDay()];

dateNow.textContent = dayOfWeek + ' ' + month + ' ' + now.getDate() + ', ' + now.getFullYear();
}

setDate();