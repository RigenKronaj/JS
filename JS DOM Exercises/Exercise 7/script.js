const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');
const reset = document.querySelector('#reset');
const counter = document.querySelector('#counter');

let count = 0;

update();

increase.addEventListener('click', () => {
    count++;
    update();
})

decrease.addEventListener('click', () => {
    count--;

    if(count < 0)
        count = 0;

    update();
})

reset.addEventListener('click', () => {
    count = 0;
    update();
})

function update() {
    counter.innerHTML = count;
}