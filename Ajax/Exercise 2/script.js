async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=2');
    const json = await response.json();
    onStreamProcessed(json);
}

function onStreamProcessed(obj) {
    let div = document.createElement('div');
    let ul = document.createElement('ul');

    div.setAttribute('id', 'listdiv');
    document.body.appendChild(div);
    div.appendChild(ul);

    
    for(let i = 0; i < 20; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = obj[i].title;
    }
}

fetchData();