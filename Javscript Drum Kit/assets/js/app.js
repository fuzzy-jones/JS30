// function with logic to play sound, passed through the window event listener below
function playSound(event) {
    // console.log(event.keyCode);

    // variable with document query selector to select first element that matches "audio" and set it equal to the key code pressed, using es6 template literals and placeholder
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

    // select element with a class of key corresponding to the key code
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    // if there is not audio element for key pressed, its will just stop function and return out of it
    if (!audio) return; 

    // rewind audio to the start, so that there isnt a delay when pressing same key over and over
    audio.currentTime = 0;

    // will play that sound file when key is pressed, .play() is a built in function for the audio element
    audio.play();

    // when key is pressed, add a class of .playing to the key when pressed, from const key above
    // same as jquery key.addClass('playing')
    key.classList.add('playing');
}

// transition end event
function removeTransition(event) {
    // console.log(event);
    // skip the event if it is not a transform
    if (event.propertyName !== 'transform') return;

    // this is qual to what got called against it, add event listener got called, and 'key' got called against it
    // when key is pressed and transition ends, the class of playing is removed
    this.classList.remove('playing')
}

// set a variable to all elements with the class of key
const keys = document.querySelectorAll('.key');
// for each key pressed an event listener is added to it, that listens for transition end, and then runs function removeTransition
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

// listen for keydown event, when that happens run the function that will give us the event tp play the sounds
window.addEventListener('keydown', playSound);