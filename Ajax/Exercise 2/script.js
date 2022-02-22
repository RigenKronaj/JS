async function fetchData(index) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/' + index);
    const json = await response.json();
    onStreamProcessed(json);
}

function onStreamProcessed(obj) {
    let div = document.createElement('div');
    let ul = document.createElement('ul');

    div.setAttribute('id', 'listdiv');
    document.body.appendChild(div);
    div.appendChild(ul);

    let li = document.createElement('li');
    ul.appendChild(li);

    li.textContent = obj["title"];
}

for(let i = 20; i < 41; i++) {
    fetchData(i);
}