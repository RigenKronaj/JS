function calculate(radius) {
    radius = document.querySelector('#radius').value;
    const volume = document.querySelector('#volume');
    let result = (4 / 3) * Math.PI * (radius * radius * radius);
    volume.value = result;
    
}

const button = document.querySelector('#button');
button.addEventListener('click', calculate);
