function count() {
    let count = 0;

    for(let i = 0; i < fruits.length; i++) 
        count++;

    result.textContent = count;
}

const button = document.querySelector('#count-btn');
const fruits = [document.querySelector('#one'), document.querySelector('#two'), document.querySelector('#three'), document.querySelector('#four')];
const result = document.querySelector('#display-count');
button.addEventListener('click', count);