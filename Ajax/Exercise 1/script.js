async function fetchJoke() {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const json = await response.json();
    onStreamProcessed(json);
}

function onStreamProcessed(json) {
    let container = document.querySelector('#container');
    container.textContent = json["value"];
}

fetchJoke();