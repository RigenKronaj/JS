const button = document.querySelector('#button');
const width = window.innerWidth;
const height = window.innerHeight;
const pOne = document.querySelector('#height');
const pTwo = document.querySelector('#width');

button.addEventListener('click', windowSize);

function windowSize() {
    pOne.innerHTML = height + 'px';
    pTwo.innerHTML = width + 'px';
}