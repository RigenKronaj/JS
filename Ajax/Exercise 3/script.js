async function fetchData() {
    const response = await fetch('https://api.tvmaze.com/singlesearch/shows?q=dexter');
    const json = await response.json();
    onStreamProcessed(json);
}

function onStreamProcessed(json) {
    let ul = document.createElement('ul');
    document.body.appendChild(ul);

    let img = document.createElement('img');
    let li0 = document.createElement('li');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    let li4 = document.createElement('li');
    let li5 = document.createElement('li');

    ul.appendChild(li0);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(li5);

    li0.appendChild(img);

    img.src = json['image'].medium;
    li1.textContent = "Rating: " + json["rating"].average;
    li2.textContent = "Genres: " + json['genres'];
    li3.textContent = "Language: " + json['language'];
    li4.textContent = "Summary: " + json['summary'];
    li5.textContent = "Official website: " + json['officialSite'];
}

fetchData();