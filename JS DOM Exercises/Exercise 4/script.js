const button = document.querySelector('#button');
const container = document.querySelector('#container');
button.addEventListener('click', addImage);

let imageOne = document.createElement('img');
let imageTwo = document.createElement('img');
let imageThree = document.createElement('img');

function addImage() {
    let index = Math.round(Math.random() * 3);

    switch (index) {
        case 0: container.innerHTML = '<img src="http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg" width="240" height="160">'; break;
        case 1: container.innerHTML = '<img src="http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg" width="320" height="195">'; break;
        case 2: container.innerHTML = '<img src="http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg" width="500" height="343">'; break;
    }
}