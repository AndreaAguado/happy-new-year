/* eslint-disable indent */
'use strict';

let counter = 0;
let temp;

const page = document.querySelector('.js-body');
const title = document.querySelector('.js-title');
const grapesContainer = document.querySelector('.js-grapes-container');
const audio = document.querySelector('.js-audio-container');

let html = '';
const incrementAndShowCounter = () => {
    const time = document.querySelector('.js-time');
    if (counter < 12) {
        paintGrape();
        audioPlayer();
        counter++;
        time.innerHTML = counter;
    }

    else {
        clearTimeout(temp);
        time.classList.add('hidden');
        html = `<img class="img js-img hidden" src="./assets/images/uva.png" alt="uva">`;
        grapesContainer.innerHTML = html;
        grapesContainer.classList.add('hidden');
        celebration();
    }
};

function paintGrape() {
    if (counter < 12) {
        html += `<img class="img js-img" src="../assets/images/uva.png" alt="uva">`;
        grapesContainer.innerHTML = html;
    }
}

function audioPlayer() {
    let audioHtmlTag = '';
    audioHtmlTag += `<audio controls autoplay>
    <source
      src="https://dm0qx8t0i9gc9.cloudfront.net/previews/audio/BsTwCwBHBjzwub4i4/church-bell-tolling_Myv9034u_NWM.mp3"
      type="audio/mpeg">
    <p>Your browser doesn't support HTML5 audio</p>
  </audio>`;
    audio.innerHTML = audioHtmlTag;

}

function celebration() {
    page.classList.add('bg');
    title.classList.remove('hidden');
}
temp = setInterval(incrementAndShowCounter, 3000);