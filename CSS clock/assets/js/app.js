// setting the clock hands to a variables
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// function for setting the date
function setDate() {
    // set a variable now with the current date
    const now = new Date();
    // variable seconds with current date and get seconds
    const seconds = now.getSeconds();
    // variable to turn seconds into degrees for clock hand
    const secondsDegrees = (seconds * 6) + 90;
    // add style to second hand to rotate hand by degrees synced to time in seconds
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);

    const minutes = now.getMinutes();
    const minutesDegrees = (minutes * 6) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = (hours * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// set the interval of the date to seconds
setInterval(setDate, 1000);