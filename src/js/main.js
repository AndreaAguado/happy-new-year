/* eslint-disable indent */
'use strict';

let counter = 0;
let temp;

const page = document.querySelector('.js-body');
const title = document.querySelector('.js-title');
const container = document.querySelector('.js-container');

let html = '';
const incrementAndShowCounter = () => {
    const time = document.querySelector('.js-time');
    if (counter < 12) {
        paintGrape();
        counter++;
        time.innerHTML = counter;
    }

    else {
        clearTimeout(temp);
        time.classList.add('hidden');
        html = `<img class="img js-img hidden" src="./assets/images/uva.png" alt="uva">`;
        container.innerHTML = html;
        container.classList.add('hidden');
        celebration();
    }
};

function paintGrape() {
    if (counter < 12) {
        html += `<img class="img js-img" src="../assets/images/uva.png" alt="uva">`;
        container.innerHTML = html;
    }
}

function celebration() {
    page.classList.add('bg');
    title.classList.remove('hidden');
}
temp = setInterval(incrementAndShowCounter, 3000);